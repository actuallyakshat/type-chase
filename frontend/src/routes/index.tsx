import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => (
    <div className="flex-1 flex flex-col items-center justify-center px-4">
      <h1 className="font-extrabold tracking-tight text-center text-3xl md:text-6xl bg-clip-text pb-2 text-transparent bg-gradient-to-b from-slate-600 to-zinc-900">
        howdy nerd! let's race
      </h1>
      <form className="flex flex-col mt-8 space-y-4 max-w-md w-full">
        <Input type="text" placeholder="Player Name" />
        <Button className="bg-gradient-to-b from-slate-700 to-zinc-900">
          Create Room
        </Button>
      </form>
    </div>
  ),
});
