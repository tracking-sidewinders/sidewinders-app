// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const StatusEnum = {
  "DONE": "DONE",
  "MISSING": "MISSING",
  "OVERDUE": "OVERDUE"
};

const RankEnum = {
  "AB": "AB",
  "AMN": "AMN",
  "A1_C": "A1C",
  "SRA": "SRA",
  "SSGT": "SSGT",
  "TSGT": "TSGT",
  "MSGT": "MSGT",
  "SMSGT": "SMSGT",
  "CMSGT": "CMSGT",
  "CCM": "CCM"
};

const { TrainingCompletionStatus, Trainings, TrainingTypes, Servicemen } = initSchema(schema);

export {
  TrainingCompletionStatus,
  Trainings,
  TrainingTypes,
  Servicemen,
  StatusEnum,
  RankEnum
};