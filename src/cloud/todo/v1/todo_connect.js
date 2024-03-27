// @generated by protoc-gen-connect-es v0.13.2
// @generated from file todo/v1/todo.proto (package cloud.fullstack.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateTaskRequest, DeleteTaskRequest, GetTasksRequest, GetTasksResponse, SuccessResponse, UpdateTaskRequest } from "./todo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Task service definition
 *
 * @generated from service cloud.fullstack.v1.TaskService
 */
export const TaskService = {
  typeName: "cloud.fullstack.v1.TaskService",
  methods: {
    /**
     * Create a new task
     *
     * @generated from rpc cloud.fullstack.v1.TaskService.Create
     */
    create: {
      name: "Create",
      I: CreateTaskRequest,
      O: SuccessResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Update an existing task
     *
     * @generated from rpc cloud.fullstack.v1.TaskService.Update
     */
    update: {
      name: "Update",
      I: UpdateTaskRequest,
      O: SuccessResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Delete a task
     *
     * @generated from rpc cloud.fullstack.v1.TaskService.Delete
     */
    delete: {
      name: "Delete",
      I: DeleteTaskRequest,
      O: SuccessResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get a list of tasks
     *
     * @generated from rpc cloud.fullstack.v1.TaskService.Get
     */
    get: {
      name: "Get",
      I: GetTasksRequest,
      O: GetTasksResponse,
      kind: MethodKind.Unary,
    },
  }
};

