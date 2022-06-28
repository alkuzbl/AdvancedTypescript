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
const skill: [number, string] = [1, 'dev',]

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


function test(param?: string) {
    //     const t = param !== null && param !== void 0 ? param : 'test';
    const t = param ?? 'test'
    return t
}


function test2(param?: string) {
    //     const t = param || 'test';
    const t = param || 'test'
    return t
}

// Запрос в виде платежа
 enum PaymentStatus {
    SUCCESS = 'success',
    FAILED = 'failed'
}

interface IPayment {
    sum: number,
    from: number,
    to: number
}

interface IPaymentRequest extends IPayment {
}

interface IDataSuccess extends IPayment {
    databaseId: number
}

interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}

interface IResPaymentSuccess {
    status: PaymentStatus.SUCCESS;
    data: IDataSuccess
}

interface IResPaymentFailed {
    status: PaymentStatus.FAILED;
    data: IDataFailed
}

// Type Guard
function isPaymentSuccess(x: IResPaymentSuccess | IResPaymentFailed): x is IResPaymentSuccess {
    return x.status === PaymentStatus.SUCCESS
}

const testRes = (res: IResPaymentSuccess | IResPaymentFailed) => {
    if (isPaymentSuccess(res)) {
        return res.data.databaseId
    }
     throw new Error(res.data.errorMessage)
}



// типизация unknown
const getUser = () => {
    try {
    } catch (error: unknown) {

        if(error instanceof Error){
            return error.message
        }
    }
}

const getUser2 = () => {
    try {
    } catch (error: unknown) {

        const err = error as Error
        return err.message

    }
}
