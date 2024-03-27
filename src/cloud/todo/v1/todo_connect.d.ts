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
export declare const TaskService: {
  readonly typeName: "cloud.fullstack.v1.TaskService",
  readonly methods: {
    /**
     * Create a new task
     *
     * @generated from rpc cloud.fullstack.v1.TaskService.Create
     */
    readonly create: {
      readonly name: "Create",
      readonly I: typeof CreateTaskRequest,
      readonly O: typeof SuccessResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Update an existing task
     *
     * @generated from rpc cloud.fullstack.v1.TaskService.Update
     */
    readonly update: {
      readonly name: "Update",
      readonly I: typeof UpdateTaskRequest,
      readonly O: typeof SuccessResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Delete a task
     *
     * @generated from rpc cloud.fullstack.v1.TaskService.Delete
     */
    readonly delete: {
      readonly name: "Delete",
      readonly I: typeof DeleteTaskRequest,
      readonly O: typeof SuccessResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Get a list of tasks
     *
     * @generated from rpc cloud.fullstack.v1.TaskService.Get
     */
    readonly get: {
      readonly name: "Get",
      readonly I: typeof GetTasksRequest,
      readonly O: typeof GetTasksResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

