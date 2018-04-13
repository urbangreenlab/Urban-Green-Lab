var contactTemplate = {
    Prefix: "",
    FirstName: "",
    LastName: "",
    Street: "",
    City: "",
    State: "",
    Zip: "",
    Email: "",
    ContactType: "",
    ProgramRelation: "",
    Phone: {
        Mobile: "",
        Work: "",
        Home: "",
        Alt: "",
    }, // This will need to have entry validation
    RelatedContact: [],  //Keys pointing back to contact list
    IntroducedBy: "",
    Organization: "", //Key Pointing to Organization
};
var organizationTemplate = {
    Name: "uil",
    Street: "kjykuyi",
    City: "ki",
    State: "ki",
    Zip: "4564354",
    PrimaryContact: "34552", //Key Pointing to list of contacts
    Email: "",
    Phone: {
        Mobile: "",
        Work: "",
        Home: "",
        Alt: "",
    },
};
var eventTemplate = {
    Title: 'Title',
    Status: 'Status',
    Date: 'Date',
    StartTime: 'Start Time',
    EndTime: 'End Time',
    Location: 'Location Name',
    Address: 'Address',
    GPS: 'GPS',
    Duration: 'Duration (Hours)',
    Type: 'Type',
    Contact: 'Primary Contact',
    Results: {
        Adults: 'Number of Adults',
        Youth: 'Number of Youth',
        Milage: 'Milage', //Is this total, or event length in distance?
        Staff: ['Staff member1', 'Staff member2'], //Single or multiple? addative?
        StaffHours: 'Number of Hours', //duration or total?
        Volunteers: ['Volunteer1', 'Volunteer2'],
        VolunteerHours: 'Number of Hours',
        AverageScore: 'Average Score',
        Revenue: 'Revenue', //how is this calculated?
        Notes: 'Notes',
        PhotoRelease: 'Boolean Yes/No',
        PhotoCode: 'Photo Code',
        Attendees: ['Contact 1', 'Contact 2', 'Contact 3']
    }
}

function createContacts() {
    var contacts = [];
    var contact = angular.copy(contactTemplate);
    for (var i = 0; i < 10; i++) {
        contact = {
            Id: i + 89434,
            Title: "Big Boss",
            Prefix: "Ms",
            FirstName: "First" + i,
            LastName: "Last" + i,
            Street: "abc" + i,
            City: "abc" + i,
            State: "abc" + i,
            Zip: "abc" + i,
            Email: "abc" + i,
            ContactType: "abc" + i,
            ProgramRelation: "abc" + i,
            Phone: {
                Mobile: "abc" + i,
                Work: "abc" + i,
                Home: "abc" + i,
                Alt: "abc" + i,
            }, // This will need to have entry validation
            RelatedContact: [],  //Keys pointing back to contact list
            IntroducedBy: "abc" + i,
            Organization: "abc" + i, //Key Pointing to Organization
            orgNotes: "hey here are some notes"
        };
        contacts.push(contact);
        contact = angular.copy(contactTemplate);
    }
    return contacts;
};
function createEvent() {
    var events = [];
    var event = angular.copy(eventTemplate);
    for (var i = 0; i < 10; i++) {
        event = {
            Title: 'Title',
            Status: 'Status',
            Date: 'Date',
            StartTime: 'Start Time',
            EndTime: 'End Time',
            Location: 'Location Name',
            Address: 'Address',
            GPS: 'GPS',
            Duration: 'Duration (Hours)',
            Type: 'Type',
            Contact: 'Primary Contact',
            Results: {
                Adults: 'Number of Adults',
                Youth: 'Number of Youth',
                Mileage: 'Mileage', //Is this total, or event length in distance?
                Staff: ['Staff member1', 'Staff member2'], //Single or multiple? addative?
                StaffHours: 'Number of Hours', //duration or total?
                Volunteers: ['Volunteer1', 'Volunteer2'],
                VolunteerHours: 'Number of Hours',
                AverageScore: 'Average Score',
                Revenue: 'Revenue', //how is this calculated?
                Notes: 'Notes',
                PhotoRelease: 'Boolean Yes/No',
                PhotoCode: 'Photo Code',
                Attendees: ['Contact 1', 'Contact 2', 'Contact 3']
            }
        }
        events.push(event);        
    }
    return events;
}