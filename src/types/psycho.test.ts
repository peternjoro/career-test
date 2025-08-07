import { Type as T, Static, Null } from "@sinclair/typebox";


export const QuizAnswer = T.Union([
  T.Literal('Agree'),
  T.Literal('Disagree')
]);

export const INT_CODE = T.Union([
  T.Literal('R'),
  T.Literal('I'),
  T.Literal('A'),
  T.Literal('S'),
  T.Literal('E'),
  T.Literal('C'),
])
export type INT_CODE_Type = Static<typeof INT_CODE>;

export const QnsSchema = T.Object({
  qsn: T.Number(),
  text: T.String(),
  INT_CODE: INT_CODE
})
export type Qnsype = Static<typeof QnsSchema>;

export const CacheTestResultSchema = T.Object({
    qsn: T.Number(),
    ans: QuizAnswer,
    INT_CODE: INT_CODE
})
export type CacheTestResult = Static<typeof CacheTestResultSchema>;

export const RIASECResultSchema = T.Object({
  positive: T.Number(),
  negative: T.Number()
})
export type RIASECResult = Static<typeof RIASECResultSchema>;

export const NetScoreSchema = T.Object({
  code: INT_CODE,
  score:T.Number()
})
export type NetScore = Static<typeof NetScoreSchema>;

export const IDQueryString = T.Object({
  id: T.Number()
});
export type IDQueryStringType = Static<typeof IDQueryString>;

export const UserIDQueryParam = T.Object({
  id: T.String({ pattern: '^[\\w-]{2,20}$' })
});
export type UserIDQueryParamType = Static<typeof UserIDQueryParam>;

// { description: "Example request schema" }
// age: Type.Number({ minimum: 0, maximum: 150 }),
export const PsychoTestSchema = T.Object({
  userId: T.String({ pattern: '^[\\w-]{2,20}$' }),
});
export type PsychoTestRequest = Static<typeof PsychoTestSchema>;

export const PsychoTestAnswerSchema = T.Object({
  qsn: T.Number(),
  //ans: T.Enum({ Agree: 'agree', Disagree: 'dislike' })
  ans: QuizAnswer
});
export type PsychoTestAnswerRequest = Static<typeof PsychoTestAnswerSchema>;

const QuizAnswerRequestSchema = T.Object({
  qsn: T.Number(),
  ans: T.String()
});

const PsychoQuizAnswerFormatSchema = T.Object({
  method: T.String(),
  endpoint: T.String(),
  request_body: QuizAnswerRequestSchema
});

//{ description: "Error response schema" }
export const PsychoQuizResponseSchema = T.Object({
  success: T.Boolean(),
  message: T.String(),
  endOfTest: T.Boolean(),
  question: T.String(),
  answer_format: PsychoQuizAnswerFormatSchema,
  results_url: T.Optional(T.String())
});
export type PsychoQuizResponse = Static<typeof PsychoQuizResponseSchema>;

export const NextQuizSchema = T.Object({
  endOfTest: T.Boolean(),
  qsnRslt: T.Union([
    QnsSchema,
    T.Null()
  ])
});
export type NextQuizType = Static<typeof NextQuizSchema>;

