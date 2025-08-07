import { CacheTestResult, Qnsype } from "../../types/psycho.test";


// https://www.truity.com/test/career-personality-profiler-test - borrow some questions from here

//Psychometric Test Qns
export const PsychometricTestQns:Qnsype[] = [
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

export const RIASECResultsMap = {
    "R": {
        name: "Realistic",
        summary: `Realistic people are often good at mechanical or athletic jobs.`,
        college_majors: ["Agriculture","Health Assistant","Computers","Construction","Mechanic/Machinist","Engineering","Food and Hospitality"],
        related_pathways: ["Natural Resources","Health Services","Industrial and Engineering Technology","Arts and Communication"],
    },
    "I": {
        name: "Investigative",
        summary: `Investigative people like to watch, learn, analyze and solve problems.`,
        college_majors: ["Marine Biology","Engineering","Chemistry","Zoology","Medicine/Surgery","Consumer Economics","Psychology"],
        related_pathways: ["Health Services","Business","Public and Human Services","Industrial and Engineering Technology"],
    },
    "A": {
        name: "Artistic",
        summary: `Artistic people like to work in unstructured situations where they can use their creativity.`,
        college_majors: ["Communications","Cosmetology","Fine and Performing Arts","Photography","Radio and TV","Graphic Design","Interior Design","Architecture"],
        related_pathways: ["Public and Human Services","Arts and Communication"],
    },
    "S": {
        name: "Social",
        summary: `Social people like to work with other people, rather than things.`,
        college_majors: ["Counseling","Nursing","Physical Therapy","Travel","Advertising","Public Relations","Education"],
        related_pathways: ["Health Services","Public and Human Services"],
    },
    "E": {
        name: "Enterprising",
        summary: `Enterprising people like to work with others and enjoy persuading and performing.`,
        college_majors: ["Fashion Merchandising","Real Estate","Marketing/Sales","Law","Political Science","International Trade","Banking/Finance"],
        related_pathways: ["Business","Public and Human Services","Arts and Communication"],
    },
    "C": {
        name: "Conventional",
        summary: `Conventional people are very detail oriented,organized and like to work with data.`,
        college_majors: ["Accounting","Court Reporting","Insurance","Administration","Medical Records","Banking","Data Processing"],
        related_pathways: ["Health Services","Business","Industrial and Engineering Technology"],
    }
}


export const SampleResults:CacheTestResult[] = [
    {
        "qsn": 20,
        "ans": "Disagree",
        "INT_CODE": "S"
    },
    {
        "qsn": 19,
        "ans": "Disagree",
        "INT_CODE": "E"
    },
    {
        "qsn": 16,
        "ans": "Agree",
        "INT_CODE": "E"
    },
    {
        "qsn": 21,
        "ans": "Agree",
        "INT_CODE": "I"
    },
    {
        "qsn": 3,
        "ans": "Agree",
        "INT_CODE": "A"
    },
    {
        "qsn": 4,
        "ans": "Disagree",
        "INT_CODE": "S"
    },
    {
        "qsn": 2,
        "ans": "Disagree",
        "INT_CODE": "I"
    },
    {
        "qsn": 17,
        "ans": "Agree",
        "INT_CODE": "A"
    },
    {
        "qsn": 11,
        "ans": "Agree",
        "INT_CODE": "I"
    },
    {
        "qsn": 12,
        "ans": "Disagree",
        "INT_CODE": "E"
    },
    {
        "qsn": 18,
        "ans": "Agree",
        "INT_CODE": "I"
    },
    {
        "qsn": 6,
        "ans": "Agree",
        "INT_CODE": "C"
    },
    {
        "qsn": 8,
        "ans": "Disagree",
        "INT_CODE": "A"
    },
    {
        "qsn": 10,
        "ans": "Disagree",
        "INT_CODE": "E"
    },
    {
        "qsn": 1,
        "ans": "Disagree",
        "INT_CODE": "R"
    },
    {
        "qsn": 9,
        "ans": "Agree",
        "INT_CODE": "C"
    },
    {
        "qsn": 7,
        "ans": "Agree",
        "INT_CODE": "R"
    },
    {
        "qsn": 14,
        "ans": "Agree",
        "INT_CODE": "R"
    },
    {
        "qsn": 15,
        "ans": "Agree",
        "INT_CODE": "C"
    },
    {
        "qsn": 22,
        "ans": "Disagree",
        "INT_CODE": "R"
    },
    {
        "qsn": 13,
        "ans": "Disagree",
        "INT_CODE": "E"
    },
    {
        "qsn": 5,
        "ans": "Agree",
        "INT_CODE": "E"
    }
]

export const PsychometricTestQuizes = () => {
    return PsychometricTestQns.map(obj => obj.qsn);;
}

export const PsychoQuizCode = (qsn:number) => {
    return PsychometricTestQns.filter(obj => obj.qsn == qsn)?.[0]?.INT_CODE??'';
}