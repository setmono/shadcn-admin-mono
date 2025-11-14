type PageErrorProps = {
  title: string;
  info: string;
  message: string;
  children: React.ReactNode;
};

export function PageError({ title, info, message, children }: PageErrorProps) {
  return (
    <div className="h-svh">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <h1 className="text-[7rem] leading-tight font-bold">{title}</h1>
        <span className="font-medium">{info}</span>
        <p className="text-muted-foreground text-center">{message}</p>
        <div className="mt-6 flex gap-4">{children}</div>
      </div>
    </div>
  );
}
