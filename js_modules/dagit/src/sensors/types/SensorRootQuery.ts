// @generated
/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SensorSelector, JobType, JobStatus, PipelineRunStatus, JobTickStatus } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: SensorRootQuery
// ====================================================

export interface SensorRootQuery_sensorOrError_SensorNotFoundError {
  __typename: "SensorNotFoundError" | "PythonError";
}

export interface SensorRootQuery_sensorOrError_Sensor_sensorState_jobSpecificData_SensorJobData {
  __typename: "SensorJobData";
  lastRunKey: string | null;
}

export interface SensorRootQuery_sensorOrError_Sensor_sensorState_jobSpecificData_ScheduleJobData {
  __typename: "ScheduleJobData";
  cronSchedule: string;
}

export type SensorRootQuery_sensorOrError_Sensor_sensorState_jobSpecificData = SensorRootQuery_sensorOrError_Sensor_sensorState_jobSpecificData_SensorJobData | SensorRootQuery_sensorOrError_Sensor_sensorState_jobSpecificData_ScheduleJobData;

export interface SensorRootQuery_sensorOrError_Sensor_sensorState_runs {
  __typename: "PipelineRun";
  id: string;
  runId: string;
  pipelineName: string;
  status: PipelineRunStatus;
}

export interface SensorRootQuery_sensorOrError_Sensor_sensorState_ticks {
  __typename: "JobTick";
  id: string;
  status: JobTickStatus;
  timestamp: number;
}

export interface SensorRootQuery_sensorOrError_Sensor_sensorState {
  __typename: "JobState";
  id: string;
  name: string;
  jobType: JobType;
  status: JobStatus;
  jobSpecificData: SensorRootQuery_sensorOrError_Sensor_sensorState_jobSpecificData | null;
  runs: SensorRootQuery_sensorOrError_Sensor_sensorState_runs[];
  ticks: SensorRootQuery_sensorOrError_Sensor_sensorState_ticks[];
}

export interface SensorRootQuery_sensorOrError_Sensor {
  __typename: "Sensor";
  id: string;
  jobOriginId: string;
  name: string;
  pipelineName: string;
  solidSelection: (string | null)[] | null;
  mode: string;
  sensorState: SensorRootQuery_sensorOrError_Sensor_sensorState;
}

export type SensorRootQuery_sensorOrError = SensorRootQuery_sensorOrError_SensorNotFoundError | SensorRootQuery_sensorOrError_Sensor;

export interface SensorRootQuery {
  sensorOrError: SensorRootQuery_sensorOrError;
}

export interface SensorRootQueryVariables {
  sensorSelector: SensorSelector;
}