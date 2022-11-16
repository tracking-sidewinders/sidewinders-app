/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTrainingCompletionStatus = /* GraphQL */ `
  mutation CreateTrainingCompletionStatus(
    $input: CreateTrainingCompletionStatusInput!
    $condition: ModelTrainingCompletionStatusConditionInput
  ) {
    createTrainingCompletionStatus(input: $input, condition: $condition) {
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
export const updateTrainingCompletionStatus = /* GraphQL */ `
  mutation UpdateTrainingCompletionStatus(
    $input: UpdateTrainingCompletionStatusInput!
    $condition: ModelTrainingCompletionStatusConditionInput
  ) {
    updateTrainingCompletionStatus(input: $input, condition: $condition) {
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
export const deleteTrainingCompletionStatus = /* GraphQL */ `
  mutation DeleteTrainingCompletionStatus(
    $input: DeleteTrainingCompletionStatusInput!
    $condition: ModelTrainingCompletionStatusConditionInput
  ) {
    deleteTrainingCompletionStatus(input: $input, condition: $condition) {
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
export const createTrainings = /* GraphQL */ `
  mutation CreateTrainings(
    $input: CreateTrainingsInput!
    $condition: ModelTrainingsConditionInput
  ) {
    createTrainings(input: $input, condition: $condition) {
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
export const updateTrainings = /* GraphQL */ `
  mutation UpdateTrainings(
    $input: UpdateTrainingsInput!
    $condition: ModelTrainingsConditionInput
  ) {
    updateTrainings(input: $input, condition: $condition) {
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
export const deleteTrainings = /* GraphQL */ `
  mutation DeleteTrainings(
    $input: DeleteTrainingsInput!
    $condition: ModelTrainingsConditionInput
  ) {
    deleteTrainings(input: $input, condition: $condition) {
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
export const createTrainingTypes = /* GraphQL */ `
  mutation CreateTrainingTypes(
    $input: CreateTrainingTypesInput!
    $condition: ModelTrainingTypesConditionInput
  ) {
    createTrainingTypes(input: $input, condition: $condition) {
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
export const updateTrainingTypes = /* GraphQL */ `
  mutation UpdateTrainingTypes(
    $input: UpdateTrainingTypesInput!
    $condition: ModelTrainingTypesConditionInput
  ) {
    updateTrainingTypes(input: $input, condition: $condition) {
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
export const deleteTrainingTypes = /* GraphQL */ `
  mutation DeleteTrainingTypes(
    $input: DeleteTrainingTypesInput!
    $condition: ModelTrainingTypesConditionInput
  ) {
    deleteTrainingTypes(input: $input, condition: $condition) {
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
export const createServicemen = /* GraphQL */ `
  mutation CreateServicemen(
    $input: CreateServicemenInput!
    $condition: ModelServicemenConditionInput
  ) {
    createServicemen(input: $input, condition: $condition) {
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
export const updateServicemen = /* GraphQL */ `
  mutation UpdateServicemen(
    $input: UpdateServicemenInput!
    $condition: ModelServicemenConditionInput
  ) {
    updateServicemen(input: $input, condition: $condition) {
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
export const deleteServicemen = /* GraphQL */ `
  mutation DeleteServicemen(
    $input: DeleteServicemenInput!
    $condition: ModelServicemenConditionInput
  ) {
    deleteServicemen(input: $input, condition: $condition) {
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
