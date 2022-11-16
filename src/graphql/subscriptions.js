/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTrainingCompletionStatus = /* GraphQL */ `
  subscription OnCreateTrainingCompletionStatus(
    $filter: ModelSubscriptionTrainingCompletionStatusFilterInput
  ) {
    onCreateTrainingCompletionStatus(filter: $filter) {
      id
      Training {
        id
        TrainingName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        trainingsTrainingTypesId
      }
      Servicemen {
        id
        Firstname
        Lastname
        Rank
        Position
        AFSC
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      DateCompleted
      DateDue
      Status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      trainingCompletionStatusTrainingId
      trainingCompletionStatusServicemenId
    }
  }
`;
export const onUpdateTrainingCompletionStatus = /* GraphQL */ `
  subscription OnUpdateTrainingCompletionStatus(
    $filter: ModelSubscriptionTrainingCompletionStatusFilterInput
  ) {
    onUpdateTrainingCompletionStatus(filter: $filter) {
      id
      Training {
        id
        TrainingName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        trainingsTrainingTypesId
      }
      Servicemen {
        id
        Firstname
        Lastname
        Rank
        Position
        AFSC
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      DateCompleted
      DateDue
      Status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      trainingCompletionStatusTrainingId
      trainingCompletionStatusServicemenId
    }
  }
`;
export const onDeleteTrainingCompletionStatus = /* GraphQL */ `
  subscription OnDeleteTrainingCompletionStatus(
    $filter: ModelSubscriptionTrainingCompletionStatusFilterInput
  ) {
    onDeleteTrainingCompletionStatus(filter: $filter) {
      id
      Training {
        id
        TrainingName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        trainingsTrainingTypesId
      }
      Servicemen {
        id
        Firstname
        Lastname
        Rank
        Position
        AFSC
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      DateCompleted
      DateDue
      Status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      trainingCompletionStatusTrainingId
      trainingCompletionStatusServicemenId
    }
  }
`;
export const onCreateTrainings = /* GraphQL */ `
  subscription OnCreateTrainings(
    $filter: ModelSubscriptionTrainingsFilterInput
  ) {
    onCreateTrainings(filter: $filter) {
      id
      TrainingName
      TrainingTypes {
        id
        TrainingTypeName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      trainingsTrainingTypesId
    }
  }
`;
export const onUpdateTrainings = /* GraphQL */ `
  subscription OnUpdateTrainings(
    $filter: ModelSubscriptionTrainingsFilterInput
  ) {
    onUpdateTrainings(filter: $filter) {
      id
      TrainingName
      TrainingTypes {
        id
        TrainingTypeName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      trainingsTrainingTypesId
    }
  }
`;
export const onDeleteTrainings = /* GraphQL */ `
  subscription OnDeleteTrainings(
    $filter: ModelSubscriptionTrainingsFilterInput
  ) {
    onDeleteTrainings(filter: $filter) {
      id
      TrainingName
      TrainingTypes {
        id
        TrainingTypeName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      trainingsTrainingTypesId
    }
  }
`;
export const onCreateTrainingTypes = /* GraphQL */ `
  subscription OnCreateTrainingTypes(
    $filter: ModelSubscriptionTrainingTypesFilterInput
  ) {
    onCreateTrainingTypes(filter: $filter) {
      id
      TrainingTypeName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTrainingTypes = /* GraphQL */ `
  subscription OnUpdateTrainingTypes(
    $filter: ModelSubscriptionTrainingTypesFilterInput
  ) {
    onUpdateTrainingTypes(filter: $filter) {
      id
      TrainingTypeName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTrainingTypes = /* GraphQL */ `
  subscription OnDeleteTrainingTypes(
    $filter: ModelSubscriptionTrainingTypesFilterInput
  ) {
    onDeleteTrainingTypes(filter: $filter) {
      id
      TrainingTypeName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateServicemen = /* GraphQL */ `
  subscription OnCreateServicemen(
    $filter: ModelSubscriptionServicemenFilterInput
  ) {
    onCreateServicemen(filter: $filter) {
      id
      Firstname
      Lastname
      Rank
      Position
      AFSC
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateServicemen = /* GraphQL */ `
  subscription OnUpdateServicemen(
    $filter: ModelSubscriptionServicemenFilterInput
  ) {
    onUpdateServicemen(filter: $filter) {
      id
      Firstname
      Lastname
      Rank
      Position
      AFSC
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteServicemen = /* GraphQL */ `
  subscription OnDeleteServicemen(
    $filter: ModelSubscriptionServicemenFilterInput
  ) {
    onDeleteServicemen(filter: $filter) {
      id
      Firstname
      Lastname
      Rank
      Position
      AFSC
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
