import { foo } from "#/foo";

export function wow(param1: string, param2: string): void {
    console.log("type_test", param1, param2, foo);
}