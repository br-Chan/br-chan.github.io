import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

export default function Title() {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="space-y-1">
        <h1 className="text-center text-4xl font-extrabold">Brandon Chan</h1>
        <p className="text-muted-foreground text-sm">
          Penultimate Software Engineering Student at the University of Auckland
        </p>
      </div>

      <div className="justify-center flex h-5 items-center gap-4 text-sm">
        <Badge asChild>
          <a target="_blank" href="https://www.linkedin.com/in/brandon-sh-chan/">
            brandon-sh-chan
          </a>
        </Badge>
        <Separator orientation="vertical" />
        <Badge asChild>
          <a target="_blank" href="https://github.com/br-Chan">
            br-Chan
          </a>
        </Badge>
      </div>

      <Separator />
    </div>
  );
}
