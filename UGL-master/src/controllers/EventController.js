
App.controller('EventController', function ($scope, $http, $routeParams, $location, $sce, $filter, $uibModal, $rootScope,$compile, EventFactory, ContactFactory) {
  $scope.events = createEvent();
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();

  // Creates array of event objects
  // Needs to push the whole array to the '$scope.eventSources' variable
  EventFactory.getEvents()
  .then(events=>{
      // loop to rename keys in all event objects to the property names that the calendar package uses
      events.EventInfo.forEach(event=>{
          event.id = event.Event_id;
          event.title = event.Title;
          event.start = event.Planned_Start;
          event.end = event.Planned_End;
          $scope.events.push(event);
      });
      console.log('see logggg',events.EventInfo);
      
  });
  
    /* event source that calls a function on every view switch */
    $scope.eventsF = function (start, end, timezone, callback) {
      var s = new Date(start).getTime() / 1000;
      var e = new Date(end).getTime() / 1000;
      var m = new Date(start).getMonth();
      var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
      callback(events);
    };

  /* alert on eventClick */
  $scope.alertOnEventClick = function (date, jsEvent, view) {
      // console.log('date',date);
      // This event will display the clicked events info 
      // on the left side bar
      EventFactory.getEvent(date.Event_Id)
      .then(eventInfo=>{
        console.log('event nifo ',eventInfo);
        $scope.thisEvent = eventInfo;
        return ContactFactory.getContact(eventInfo.Primary_Contact);
        // console.log('event type',eventType);
        console.log('scope this evnet',$scope.thisEvent);
      })
      .then(primeContact=>{
        console.log('primeContact',primeContact);
        $scope.thisEvent.Primary_Contact_Name = `${primeContact.First_Name} ${primeContact.Last_Name}`;
        $scope.thisEvent.Primary_Contact_Number = `cell: ${primeContact.Phone_Cell}, other: ${primeContact.Phone_Other}`;

      })
  };

  /* alert on Move/Drop */
  $scope.alertOnDrop = function (event, delta, revertFunc, jsEvent, ui, view) {
      console.log('event', event); 
      let newEvent = {
        // "Planned_End": `${moment(event.end._d).format('YYYY-MM-DD')}`,
        "Planned_Start": `${moment(event.start._d).format('YYYY-MM-DD')}`,
        "Event_Id": event.Event_Id,
        "Title": `${event.Title}`,
        "Primary_Contact": event.Primary_Contact,
        "Status": event.Status,
        "Event_Type_Id": `${event.Event_Type_Id}`,
        "Date": `${moment(event.start._d).format('YYYY-MM-DDTHH:mm:SS')}`,
        "Event_Duration": event.Event_Duration,
      }
      // console.log('newEvent',newEvent);
      EventFactory.editEvent(event)
      .then(response=>{
        console.log('repseons',response);
      })
  };

  /* alert on Resize */
  $scope.alertOnResize = function (event, delta, revertFunc, jsEvent, ui, view) {
      console.log('whaaat');
      $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
  };
  $scope.addRemoveEventSource = function (sources, source) {
      var canAdd = 0;
      angular.forEach(sources, function (value, key) {
          if (sources[key] === source) {
              sources.splice(key, 1);
              canAdd = 1;
          }
      });
      if (canAdd === 0) {
          sources.push(source);
      }
  };
  /* add custom event*/
  $scope.addEvent = function () {
      $scope.events.push({
          title: 'Open Sesame',
          start: new Date(y, m, 28),
          end: new Date(y, m, 29),
          className: ['openSesame']
      });
  };
  /* remove event */
  $scope.remove = function (index) {
      $scope.events.splice(index, 1);
  };
  /* Change View */
  $scope.changeView = function (view, calendar) {
      uiCalendarConfig.calendars[calendar].fullCalendar('changeView', view);
  };
  /* Change View */
  $scope.renderCalender = function (calendar) {
      if (uiCalendarConfig.calendars[calendar]) {
          uiCalendarConfig.calendars[calendar].fullCalendar('render');
      }
  };
  /* Render Tooltip */
  $scope.eventRender = function (event, element, view) {
      element.attr({
          'tooltip': event.title,
          'tooltip-append-to-body': true
      });
      $compile(element)($scope);
  };
  /* config object */
  $scope.uiConfig = {
      calendar: {
          height: 450,
          editable: true,
          header: {
              left: 'title',
              center: '',
              right: 'today prev,next'
          },
          eventClick: $scope.alertOnEventClick,
          eventDrop: $scope.alertOnDrop,
          eventResize: $scope.alertOnResize,
          eventRender: $scope.eventRender
      }
  };

  $scope.changeLang = function () {
      if ($scope.changeTo === 'Hungarian') {
          $scope.uiConfig.calendar.dayNames = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
          $scope.uiConfig.calendar.dayNamesShort = ["Vas", "Hét", "Kedd", "Sze", "Csüt", "Pén", "Szo"];
          $scope.changeTo = 'English';
      } else {
          $scope.uiConfig.calendar.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          $scope.uiConfig.calendar.dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          $scope.changeTo = 'Hungarian';
      }
  };
  /* event sources array*/
  $scope.eventSources = [$scope.events, $scope.eventsF];
})