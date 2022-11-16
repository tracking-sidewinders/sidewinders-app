import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

export enum Rank {
  AB = "AB",
  AMN = "AMN",
  A1_C = "A1C",
  SRA = "SRA",
  SSGT = "SSGT",
  TSGT = "TSGT",
  MSGT = "MSGT",
  SMSGT = "SMSGT",
  CMSGT = "CMSGT",
  CCM = "CCM",
  CMSAF = "CMSAF",
  SNDLT = "SNDLT",
  FSTLT = "FSTLT",
  MAJ = "MAJ",
  LTCO = "LTCO",
  COL = "COL",
  BRIG = "BRIG",
  MAJG = "MAJG",
  LTGE = "LTGE",
  GEN = "GEN",
  GAF = "GAF"
}

export enum TrainingStatusEnum {
  DONE = "DONE",
  MISSING = "MISSING"
}

type TrainingCompletionStatusMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TrainingsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TrainingTypesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ServicemenMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerTrainingCompletionStatus = {
  readonly id: string;
  readonly Training?: Trainings | null;
  readonly Servicemen?: Servicemen | null;
  readonly DateCompleted?: string | null;
  readonly DateDue?: string | null;
  readonly Status?: TrainingStatusEnum | keyof typeof TrainingStatusEnum | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly trainingCompletionStatusTrainingId?: string | null;
  readonly trainingCompletionStatusServicemenId?: string | null;
}

type LazyTrainingCompletionStatus = {
  readonly id: string;
  readonly Training: AsyncItem<Trainings | undefined>;
  readonly Servicemen: AsyncItem<Servicemen | undefined>;
  readonly DateCompleted?: string | null;
  readonly DateDue?: string | null;
  readonly Status?: TrainingStatusEnum | keyof typeof TrainingStatusEnum | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly trainingCompletionStatusTrainingId?: string | null;
  readonly trainingCompletionStatusServicemenId?: string | null;
}

export declare type TrainingCompletionStatus = LazyLoading extends LazyLoadingDisabled ? EagerTrainingCompletionStatus : LazyTrainingCompletionStatus

export declare const TrainingCompletionStatus: (new (init: ModelInit<TrainingCompletionStatus, TrainingCompletionStatusMetaData>) => TrainingCompletionStatus) & {
  copyOf(source: TrainingCompletionStatus, mutator: (draft: MutableModel<TrainingCompletionStatus, TrainingCompletionStatusMetaData>) => MutableModel<TrainingCompletionStatus, TrainingCompletionStatusMetaData> | void): TrainingCompletionStatus;
}

type EagerTrainings = {
  readonly id: string;
  readonly TrainingName?: string | null;
  readonly TrainingTypes?: TrainingTypes | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly trainingsTrainingTypesId?: string | null;
}

type LazyTrainings = {
  readonly id: string;
  readonly TrainingName?: string | null;
  readonly TrainingTypes: AsyncItem<TrainingTypes | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly trainingsTrainingTypesId?: string | null;
}

export declare type Trainings = LazyLoading extends LazyLoadingDisabled ? EagerTrainings : LazyTrainings

export declare const Trainings: (new (init: ModelInit<Trainings, TrainingsMetaData>) => Trainings) & {
  copyOf(source: Trainings, mutator: (draft: MutableModel<Trainings, TrainingsMetaData>) => MutableModel<Trainings, TrainingsMetaData> | void): Trainings;
}

type EagerTrainingTypes = {
  readonly id: string;
  readonly TrainingTypeName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTrainingTypes = {
  readonly id: string;
  readonly TrainingTypeName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TrainingTypes = LazyLoading extends LazyLoadingDisabled ? EagerTrainingTypes : LazyTrainingTypes

export declare const TrainingTypes: (new (init: ModelInit<TrainingTypes, TrainingTypesMetaData>) => TrainingTypes) & {
  copyOf(source: TrainingTypes, mutator: (draft: MutableModel<TrainingTypes, TrainingTypesMetaData>) => MutableModel<TrainingTypes, TrainingTypesMetaData> | void): TrainingTypes;
}

type EagerServicemen = {
  readonly id: string;
  readonly Firstname?: string | null;
  readonly Lastname?: string | null;
  readonly Rank?: Rank | keyof typeof Rank | null;
  readonly Position?: string | null;
  readonly AFSC?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyServicemen = {
  readonly id: string;
  readonly Firstname?: string | null;
  readonly Lastname?: string | null;
  readonly Rank?: Rank | keyof typeof Rank | null;
  readonly Position?: string | null;
  readonly AFSC?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Servicemen = LazyLoading extends LazyLoadingDisabled ? EagerServicemen : LazyServicemen

export declare const Servicemen: (new (init: ModelInit<Servicemen, ServicemenMetaData>) => Servicemen) & {
  copyOf(source: Servicemen, mutator: (draft: MutableModel<Servicemen, ServicemenMetaData>) => MutableModel<Servicemen, ServicemenMetaData> | void): Servicemen;
}