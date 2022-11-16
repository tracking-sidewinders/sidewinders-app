/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTrainingCompletionStatus = /* GraphQL */ `
  query GetTrainingCompletionStatus($id: ID!) {
    getTrainingCompletionStatus(id: $id) {
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
export const listTrainingCompletionStatuses = /* GraphQL */ `
  query ListTrainingCompletionStatuses(
    $filter: ModelTrainingCompletionStatusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrainingCompletionStatuses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
      nextToken
      startedAt
    }
  }
`;
export const syncTrainingCompletionStatuses = /* GraphQL */ `
  query SyncTrainingCompletionStatuses(
    $filter: ModelTrainingCompletionStatusFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTrainingCompletionStatuses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
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
      nextToken
      startedAt
    }
  }
`;
export const getTrainings = /* GraphQL */ `
  query GetTrainings($id: ID!) {
    getTrainings(id: $id) {
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
export const listTrainings = /* GraphQL */ `
  query ListTrainings(
    $filter: ModelTrainingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrainings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        TrainingName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        trainingsTrainingTypesId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTrainings = /* GraphQL */ `
  query SyncTrainings(
    $filter: ModelTrainingsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTrainings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        TrainingName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        trainingsTrainingTypesId
      }
      nextToken
      startedAt
    }
  }
`;
export const getTrainingTypes = /* GraphQL */ `
  query GetTrainingTypes($id: ID!) {
    getTrainingTypes(id: $id) {
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
export const listTrainingTypes = /* GraphQL */ `
  query ListTrainingTypes(
    $filter: ModelTrainingTypesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrainingTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        TrainingTypeName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTrainingTypes = /* GraphQL */ `
  query SyncTrainingTypes(
    $filter: ModelTrainingTypesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTrainingTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        TrainingTypeName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getServicemen = /* GraphQL */ `
  query GetServicemen($id: ID!) {
    getServicemen(id: $id) {
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
export const listServicemen = /* GraphQL */ `
  query ListServicemen(
    $filter: ModelServicemenFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServicemen(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Firstname
        Lastname
        Rank
        Position
        AFSC
      }
      nextToken
      startedAt
    }
  }
`;
export const syncServicemen = /* GraphQL */ `
  query SyncServicemen(
    $filter: ModelServicemenFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncServicemen(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
