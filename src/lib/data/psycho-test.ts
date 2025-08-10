import { CacheTestResult, Qnsype } from "../../types/psycho.test";


// https://www.truity.com/test/career-personality-profiler-test - borrow some questions from here
/**
 * Realistic (“Doers”) = do physical, hands-on activities
    Investigative (“Thinkers”) = use scientific methods to analyze and solve problems
    Artistic (“Creators”) = practice creativity
    Social (“Helpers”) = help people
    Enterprising (“Persuaders”) = influence and manage people
    Conventional (“Organizers”) = organize information and follow correct procedures
 */

//Psychometric Test Qns - using RIASEC pdf doc
// 42 qns
export const PsychometricTestQnsv1:Qnsype[] = [
    {
        qsn:1,
        text:'I like to work on cars',
        INT_CODE: 'R'
    },
    {
        qsn:2,
        text:'I like to do puzzles',
        INT_CODE: 'I'
    },
    {
        qsn:3,
        text:'I am good at working independently',
        INT_CODE:'A'
    },
    {
        qsn:4,
        text:'I like to work in teams',
        INT_CODE:'S'
    },
    {
        qsn:5,
        text:'I am an ambitious person, I set goals for myself',
        INT_CODE:'E'
    },
    {
        qsn:6,
        text:'I like to organize things, (files, desks/offices)',
        INT_CODE:'C'
    },
    {
        qsn:7,
        text:'I like to build things',
        INT_CODE:'R'
    },
    {
        qsn:8,
        text:'I like to read about art and music',
        INT_CODE:'A'
    },
    {
        qsn:9,
        text:'I like to have clear instructions to follow',
        INT_CODE:'C'
    },
    {
        qsn:10,
        text:'I like to try to influence or persuade people',
        INT_CODE:'E'
    },
    {
        qsn:11,
        text:'I like to do experiments',
        INT_CODE:'I'
    },
    {
        qsn:12,
        text:'I like to teach or train people',
        INT_CODE:'E'
    },
    {
        qsn:13,
        text:'I like trying to help people solve their problems',
        INT_CODE:'E'
    },
    {
        qsn:14,
        text:'I like to take care of animals',
        INT_CODE:'R'
    },
    {
        qsn:15,
        text:'I wouldn’t mind working 8 hours per day in an office',
        INT_CODE:'C'
    },
    {
        qsn:16,
        text:'I like selling things',
        INT_CODE:'E'
    },
    {
        qsn:17,
        text:'I enjoy creative writing',
        INT_CODE:'A'
    },
    {
        qsn:18,
        text:'I enjoy science',
        INT_CODE:'I'
    },
    {
        qsn:19,
        text:'I am quick to take on new responsibilities',
        INT_CODE:'E'
    },
    {
        qsn:20,
        text:'I am interested in healing people',
        INT_CODE:'S'
    },
    {
        qsn:21,
        text:'I enjoy trying to figure out how things work',
        INT_CODE:'I'
    },
    {
        qsn:22,
        text:'I like putting things together or assembling things',
        INT_CODE:'R'
    }
]

//Psychometric Test Qns - using IP_Manual pdf doc from O*Net Interest Profiler
//IP - Interest Profiler
//60 qns manual
export const PsychometricTestQnsv2:Qnsype[] = [
    {
        qsn:1,
        text:'Assemble electronic parts',
        INT_CODE: 'R',
        score:0,
    },
    {
        qsn:2,
        text:'Develop a new medicine',
        INT_CODE: 'I',
        score:0,
    },
    {
        qsn:3,
        text:'Draw pictures',
        INT_CODE: 'A',
        score:0,
    },
    {
        qsn:4,
        text:'Teach a high-school class',
        INT_CODE: 'S',
        score:0,
    },
    {
        qsn:5,
        text:'Manage a retail store',
        INT_CODE: 'E',
        score:0,
    },
    {
        qsn:6,
        text:'Inventory supplies using a hand-held computer',
        INT_CODE: 'C',
        score:0,
    },
    {
        qsn:7,
        text:'Develop a spreadsheet using computer software',
        INT_CODE: 'C',
        score:0,
    },
    {
        qsn:8,
        text:'Start your own business',
        INT_CODE: 'E',
        score:0,
    },
    {
        qsn:9,
        text:'Teach an individual an exercise routine',
        INT_CODE: 'S',
        score:0,
    },
    {
        qsn:10,
        text:'Write scripts for movies or television shows',
        INT_CODE: 'A',
        score:0,
    },
    {
        qsn:11,
        text:'Conduct chemical experiments',
        INT_CODE: 'I',
        score:0,
    },
    {
        qsn:12,
        text:'Build kitchen cabinets',
        INT_CODE: 'R',
        score:0,
    },
    {
        qsn:13,
        text:'Lay brick or tile',
        INT_CODE: 'R',
        score:0,
    },
    {
        qsn:14,
        text:'Do laboratory tests to identify diseases',
        INT_CODE: 'I',
        score:0,
    },
    {
        qsn:15,
        text:'Write books or plays',
        INT_CODE: 'A',
        score:0,
    },
    {
        qsn:16,
        text:'Help people with personal or emotional problems',
        INT_CODE: 'S',
        score:0,
    },
    {
        qsn:17,
        text:'Manage a clothing store',
        INT_CODE: 'E',
        score:0,
    },
    {
        qsn:18,
        text:'Keep inventory records',
        INT_CODE: 'C',
        score:0,
    },
    {
        qsn:19,
        text:'Load computer software into a large computer network',
        INT_CODE: 'C',
        score:0,
    },
    {
        qsn:20,
        text:'Buy and sell stocks and bonds',
        INT_CODE: 'E',
        score:0,
    },
    {
        qsn:21,
        text:'Do volunteer work at a non-profit organization',
        INT_CODE: 'S',
        score:0,
    },
    {
        qsn:22,
        text:'Play a musical instrument',
        INT_CODE: 'A',
        score:0,
    },
    {
        qsn:23,
        text:'Investigate the cause of a fire',
        INT_CODE: 'I',
        score:0,
    },
    {
        qsn:24,
        text:'Put out forest fires',
        INT_CODE: 'R',
        score:0,
    },
    {
        qsn:25,
        text:'Repair and install locks',
        INT_CODE: 'R',
        score:0,
    },
    {
        qsn:26,
        text:'Study ways to reduce water pollution',
        INT_CODE: 'I',
        score:0,
    },
    {
        qsn:27,
        text:'Edit movies',
        INT_CODE: 'A',
        score:0,
    },
    {
        qsn:28,
        text:'Help conduct a group therapy session',
        INT_CODE: 'S',
        score:0,
    },
    {
        qsn:29,
        text:'Market a new line of clothing',
        INT_CODE: 'E',
        score:0,
    },
    {
        qsn:30,
        text:'Stamp, sort, and distribute mail for an organization',
        INT_CODE: 'C',
        score:0,
    },
    {
        qsn:31,
        text:'Proofread records or forms',
        INT_CODE: 'C',
        score:0,
    },
    {
        qsn:32,
        text:'Operate a beauty salon or barber shop',
        INT_CODE: 'E',
        score:0,
    },
    {
        qsn:33,
        text:'Give career guidance to people',
        INT_CODE: 'S',
        score:0,
    },
    {
        qsn:34,
        text:'Perform jazz or tap dance',
        INT_CODE: 'A',
        score:0,
    },
    {
        qsn:35,
        text:'Examine blood samples using a microscope',
        INT_CODE: 'I',
        score:0,
    },
    {
        qsn:36,
        text:'Repair household appliances',
        INT_CODE: 'R',
        score:0,
    },
    {
        qsn:37,
        text:'Set up and operate machines to make products',
        INT_CODE: 'R',
        score:0,
    },
    {
        qsn:38,
        text:'Study the movement of planets',
        INT_CODE: 'I',
        score:0,
    },
    {
        qsn:39,
        text:'Create special effects for movies',
        INT_CODE: 'A',
        score:0,
    },
    {
        qsn:40,
        text:'Take care of children at a day-care center',
        INT_CODE: 'S',
        score:0,
    },
    {
        qsn:41,
        text:'Manage a department within a large company',
        INT_CODE: 'E',
        score:0,
    },
    {
        qsn:42,
        text:'Keep shipping and receiving records',
        INT_CODE: 'C',
        score:0,
    },
    {
        qsn:43,
        text:'Operate a calculator',
        INT_CODE: 'C',
        score:0,
    },
    {
        qsn:44,
        text:'Negotiate business contracts',
        INT_CODE: 'E',
        score:0,
    },
    {
        qsn:45,
        text:'Perform rehabilitation therapy',
        INT_CODE: 'S',
        score:0,
    },
    {
        qsn:46,
        text:'Compose or arrange music',
        INT_CODE: 'A',
        score:0,
    },
    {
        qsn:47,
        text:'Invent a replacement for sugar',
        INT_CODE: 'I',
        score:0,
    },
    {
        qsn:48,
        text:'Raise fish in a fish hatchery',
        INT_CODE: 'R',
        score:0,
    },
    {
        qsn:49,
        text:'Drive a truck to deliver packages to offices and homes',
        INT_CODE: 'R',
        score:0,
    },
    {
        qsn:50,
        text:'Work in a biology lab',
        INT_CODE: 'I',
        score:0,
    },
    {
        qsn:51,
        text:'Paint sets for plays',
        INT_CODE: 'A',
        score:0,
    },
    {
        qsn:52,
        text:'Teach children how to play sports',
        INT_CODE: 'S',
        score:0,
    },
    {
        qsn:53,
        text:'Sell merchandise at a department store',
        INT_CODE: 'E',
        score:0,
    },
    {
        qsn:54,
        text:'Record rent payments',
        INT_CODE: 'C',
        score:0,
    },
    {
        qsn:55,
        text:'Calculate the wages of employees',
        INT_CODE: 'C',
        score:0,
    },
    {
        qsn:56,
        text:'Represent a client in a lawsuit',
        INT_CODE: 'E',
        score:0,
    },
    {
        qsn:57,
        text:'Teach sign language to people with hearing disabilities',
        INT_CODE: 'S',
        score:0,
    },
    {
        qsn:58,
        text:'Sing in a band',
        INT_CODE: 'A',
        score:0,
    },
    {
        qsn:59,
        text:'Develop a way to better predict the weather',
        INT_CODE: 'I',
        score:0,
    },
    {
        qsn:60,
        text:'Test the quality of parts before shipment',
        INT_CODE: 'R',
        score:0,
    }
]

export const RIASECResultsMap = {
    "R": {
        INT_Group: `Realistic ("Doers")`,
        likes_to: "do physical, hands-on activities",
        summary: `Realistic people are often good at mechanical or athletic jobs that utilize a physical skill.`,
        desc: `Realistic careers involve working with hands, tools, and machines. Realistic activities often deal with plants, animals, and real-world materials like wood, tools, and machinery. Many of the careers in this category involve practical problems and solutions, and occasionally working outdoors.`,
        college_majors: ["Agriculture","Health Assistant","Computers","Construction","Mechanic/Machinist","Engineering","Food and Hospitality"],
        related_pathways: ["Natural Resources","Health Services","Industrial and Engineering Technology","Arts and Communication",],
    },
    "I": {
        INT_Group: `Investigative ("Thinkers")`,
        likes_to: "use scientific methods to analyze and solve problems",
        summary: `Investigative people like to watch, learn, analyze and solve problems. They also like working with ideas and concepts, and enjoy science, technology, and academia.`,
        desc: `Investigative careers involve working with ideas, science, theories, and research pursuits coupled with intellectual inquiry. Investigative activities often require an extensive amount of thinking. These careers can involve searching for facts and figuring out problems mentally.`,
        college_majors: ["Marine Biology","Engineering","Chemistry","Mathematics","Science and Innovation","Zoology","Medicine/Surgery","Consumer Economics","Psychology"],
        related_pathways: ["Health Services","Business","Public and Human Services","Industrial and Engineering Technology"],
    },
    "A": {
        INT_Group: `Artistic ("Creators")`,
        likes_to: "practice creativity",
        summary: `Artistic people like to work in unstructured situations where they can use their creativity.`,
        desc: `Artistic careers involve self-expression and creativity and are typically associated with the performing, written, and visual arts. Artistic activities often require working with forms, designs and patterns, and the work can be done without following a clear set of rules to produce something unique.`,
        college_majors: ["Communications","Cosmetology","Fine and Performing Arts","Photography","Radio and TV","Design (Interior, Graphics)","Music","Writing","Architecture"],
        related_pathways: ["Public and Human Services","Arts and Communication"],
    },
    "S": {
        INT_Group: `Social ("Helpers")`,
        likes_to: "help people",
        summary: `Social people like to work with other people, rather than things.`,
        desc: `Social careers involve helping, nurturing, coaching, and teaching other people. These careers often require assisting or providing service to others.`,
        college_majors: ["Counseling","Nursing","Physical Therapy","Travel","Advertising","Public Relations","Education"],
        related_pathways: ["Health Services","Public and Human Services"],
    },
    "E": {
        INT_Group: `Enterprising ("Persuaders")`,
        likes_to: "influence and manage people",
        summary: `Enterprising people like to work with others and enjoy persuading and performing.`,
        desc: `Enterprising careers involve selling, managing, and social influence typically in a business context. Enterprising activities often require supervising people, leading projects, and making decisions.`,
        college_majors: ["Fashion Merchandising","Real Estate","Marketing/Sales","Law","Political Science","International Trade","Banking/Finance","Hospitality"],
        related_pathways: ["Business","Public and Human Services","Arts and Communication"],
    },
    "C": {
        INT_Group: `Conventional ("Organizers")`,
        likes_to: "organize information and follow correct procedures",
        summary: `Conventional people are very detail oriented, organized and like to work with data.`,
        desc: `Conventional careers involve the ordered and systematic manipulation of data with clear standards, typically, in a business setting. Conventional activities typically require following set rules with an attention to detail, accuracy and precision.`,
        college_majors: ["Accounting","Court Reporting","Insurance","Administration","Medical Records","Banking and Finance","Data Processing","Information Technology"],
        related_pathways: ["Health Services","Business","Industrial and Engineering Technology"],
    }
}


export const SampleResults:CacheTestResult[] = [
    {
        "qsn": 20,
        "ans": "Strongly Dislike",
        "INT_CODE": "S",
        score: 0
    },
    {
        "qsn": 19,
        "ans": "Like",
        "INT_CODE": "E",
        score: 3
    },
    {
        "qsn": 16,
        "ans": "Unsure",
        "INT_CODE": "E",
        score: 2
    },
    {
        "qsn": 21,
        "ans": "Like",
        "INT_CODE": "I",
        score: 3
    },
    {
        "qsn": 3,
        "ans": "Dislike",
        "INT_CODE": "A",
        score: 1
    },
    {
        "qsn": 4,
        "ans": "Strongly Like",
        "INT_CODE": "S",
        score: 4
    },
    {
        "qsn": 2,
        "ans": "Strongly Dislike",
        "INT_CODE": "I",
        score: 0
    },
    {
        "qsn": 17,
        "ans": "Dislike",
        "INT_CODE": "A",
        score: 1
    },
    {
        "qsn": 11,
        "ans": "Unsure",
        "INT_CODE": "I",
        score: 2
    },
    {
        "qsn": 12,
        "ans": "Like",
        "INT_CODE": "E",
        score: 3
    },
    {
        "qsn": 18,
        "ans": "Like",
        "INT_CODE": "I",
        score: 3
    },
    {
        "qsn": 6,
        "ans": "Strongly Like",
        "INT_CODE": "C",
        score: 4
    },
    {
        "qsn": 8,
        "ans": "Dislike",
        "INT_CODE": "A",
        score: 1
    },
    {
        "qsn": 10,
        "ans": "Strongly Dislike",
        "INT_CODE": "E",
        score: 0
    },
    {
        "qsn": 1,
        "ans": "Strongly Like",
        "INT_CODE": "R",
        score: 4
    },
    {
        "qsn": 9,
        "ans": "Like",
        "INT_CODE": "C",
        score: 3
    },
    {
        "qsn": 7,
        "ans": "Like",
        "INT_CODE": "R",
        score: 3
    },
    {
        "qsn": 14,
        "ans": "Strongly Dislike",
        "INT_CODE": "R",
        score: 0
    },
    {
        "qsn": 15,
        "ans": "Strongly Like",
        "INT_CODE": "C",
        score: 4
    },
    {
        "qsn": 22,
        "ans": "Strongly Like",
        "INT_CODE": "R",
        score: 4
    },
    {
        "qsn": 13,
        "ans": "Like",
        "INT_CODE": "E",
        score: 3
    },
    {
        "qsn": 5,
        "ans": "Strongly Dislike",
        "INT_CODE": "E",
        score: 0
    }
]

export const PsychometricTestQnsv2AnswerScore = new Map([
    ["strongly dislike",0],
    ["dislike",1],
    ["unsure",2],
    ["like",3],
    ["strongly like",4]
])

export const PsychometricTestQuizes = () => {
    return PsychometricTestQnsv2.map(obj => obj.qsn);
}

export const PsychoQuizCode = (qsn:number) => {
    return PsychometricTestQnsv2.filter(obj => obj.qsn == qsn)?.[0]?.INT_CODE??'';
}