import { ConnectRouter } from "@connectrpc/connect";
import { TaskService } from "@/cloud/todo/v1/todo_connect";
import type { CreateTaskRequest, UpdateTaskRequest, DeleteTaskRequest, GetTasksRequest } from "@/cloud/todo/v1/todo_pb";
import  firebaseAdmin from "@/firebase/adminApp";
import {authContextKey} from '@/lib/server/context/contextKey';
import  { loggedInUser } from "@/lib/server/auth/auth";
import  { useListTask } from "@/lib/tasks/hooks/use-list-task";
import  { useDeleteTask } from "@/lib/tasks/hooks/use-delete-task";
import  { useUpdateTask } from "@/lib/tasks/hooks/use-update-task";
import  { useCreateTask } from "@/lib/tasks/hooks/use-create-task";

const firestore = firebaseAdmin.firestore();

// TODO (YUVRAJ): Added server sided validation using protovalidate-ts(comming soon)

export default (router: ConnectRouter) => router.service(TaskService, {
    async create( req: CreateTaskRequest, context: any) {

        try {
            const user = await loggedInUser(context.values.get(authContextKey))
            // Update the task data in Firestore
            await useCreateTask({
                title: req.title,
                description: req.description,
                status: req.status,
                userId: user,
            });
            return { message: `Task created with ID:` };
        } catch (error) {
            console.error("Error creating task:", error);
            return { error: "Failed to create task" };
        }
    },
    async update(req: UpdateTaskRequest, context: any) {
        try {
            const user = await loggedInUser(context.values.get(authContextKey))
            // Update the task data in Firestore
            await useUpdateTask({
                id: req.id,
                title: req.title,
                description: req.description,
                status: req.status,
                userId: user,
            });
            
            return { message: `Task updated with ID: ${req.id}` };
        } catch (error) {
            console.error("Error updating task:", error);
            return { error: "Failed to update task" };
        }
    },
    async delete(req: DeleteTaskRequest) {
        try {
            await useDeleteTask(req.id);
            return { message: `Task deleted with ID: ${req.id}` };
        } catch (error) {
            console.error("Error deleting task:", error);
            return { error: "Failed to delete task" };
        }
    },
    async get(req: GetTasksRequest, context: any) {
        try {   
            const user = await loggedInUser(context.values.get(authContextKey))
            return await useListTask(user);
        } catch (error) {
            console.error("Error fetching tasks:", error);
            return { error: "Failed to fetch tasks" };
        }
    }
});