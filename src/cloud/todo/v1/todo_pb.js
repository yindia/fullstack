// @generated by protoc-gen-es v1.8.0
// @generated from file todo/v1/todo.proto (package cloud.fullstack.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * Message representing a task in the task management application
 *
 * @generated from message cloud.fullstack.v1.Task
 */
export const Task = /*@__PURE__*/ proto3.makeMessageType(
  "cloud.fullstack.v1.Task",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "status", kind: "enum", T: proto3.getEnumType(Task_Status) },
  ],
);

/**
 * Status of the task (e.g., "To Do," "In Progress," "Done")
 *
 * @generated from enum cloud.fullstack.v1.Task.Status
 */
export const Task_Status = /*@__PURE__*/ proto3.makeEnum(
  "cloud.fullstack.v1.Task.Status",
  [
    {no: 0, name: "TODO"},
    {no: 1, name: "IN_PROGRESS"},
    {no: 2, name: "DONE"},
  ],
);

/**
 * Request message for creating a new task
 *
 * @generated from message cloud.fullstack.v1.CreateTaskRequest
 */
export const CreateTaskRequest = /*@__PURE__*/ proto3.makeMessageType(
  "cloud.fullstack.v1.CreateTaskRequest",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "userID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Request message for updating an existing task
 *
 * @generated from message cloud.fullstack.v1.UpdateTaskRequest
 */
export const UpdateTaskRequest = /*@__PURE__*/ proto3.makeMessageType(
  "cloud.fullstack.v1.UpdateTaskRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "status", kind: "enum", T: proto3.getEnumType(Task_Status) },
    { no: 5, name: "userID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Request message for deleting a task
 *
 * @generated from message cloud.fullstack.v1.DeleteTaskRequest
 */
export const DeleteTaskRequest = /*@__PURE__*/ proto3.makeMessageType(
  "cloud.fullstack.v1.DeleteTaskRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "userID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for a successful operation
 *
 * @generated from message cloud.fullstack.v1.SuccessResponse
 */
export const SuccessResponse = /*@__PURE__*/ proto3.makeMessageType(
  "cloud.fullstack.v1.SuccessResponse",
  () => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Request message for fetching tasks
 *
 * @generated from message cloud.fullstack.v1.GetTasksRequest
 */
export const GetTasksRequest = /*@__PURE__*/ proto3.makeMessageType(
  "cloud.fullstack.v1.GetTasksRequest",
  () => [
    { no: 1, name: "page", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "pageSize", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "userID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message containing a list of tasks
 *
 * @generated from message cloud.fullstack.v1.GetTasksResponse
 */
export const GetTasksResponse = /*@__PURE__*/ proto3.makeMessageType(
  "cloud.fullstack.v1.GetTasksResponse",
  () => [
    { no: 1, name: "tasks", kind: "message", T: Task, repeated: true },
  ],
);

