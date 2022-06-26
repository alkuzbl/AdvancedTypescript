// объект
type Info = {
    "officeId": number,
    "isOpened": boolean,
    "contacts": {
        "phone": string,
        "email": string,
        "address": {
            "city": string
        }
    }
}

const info: Info = {
    "officeId": 45,
    "isOpened": false,
    "contacts": {
        "phone": "+79100000000",
        "email": "my@email.ru",
        "address": {
            "city": "Москва"
        }
    }
}

// массив
const skills: string [] = ['aaa', 'bbbb']

// tuples
const skill: [number, string] = [1, 'dev']

//enum
enum StatusCode {
    'Success' = 1,
    'InProcess',
    'Failed',
}

const enum StatusCodeConst {
    'Success' = 1,
    'InProcess',
    'Failed',
}

const res = {
    message: 'dfdfd',
    statusCode: StatusCode.InProcess
}

const enum Status {
    PUBLISHED = 'published',
    DRAFT = 'draft',
    DELETED = 'deleted'
}

/* Запрос */
type RequestTestType = {
    "topicId": number,
    "status": Status
}

type Tags = [string, string]
/* Ответ */
type ResponseTestType = [
    {
        "question": string,
        "answer": string,
        "tags": Tags,
        "likes": number,
        "status": Status
    }
]


async function getFaqs(req: RequestTestType): Promise<ResponseTestType> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data: ResponseTestType = await res.json();
    return data;
}


