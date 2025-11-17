import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { z } from "zod";

import { fonts } from "@mono/ui/config/font";
import { Button } from "@mono/ui/core/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@mono/ui/core/form";
import { RadioGroup, RadioGroupItem } from "@mono/ui/core/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@mono/ui/core/select";

import { LOCALES, type LocaleCode } from "@/types/locales";
import { useFont } from "@/components/context/font-provider";
import { useTheme } from "@/hooks/use-theme";
import { setAppearance } from "@/storage/local-storage";

export function AppearanceForm() {
  const { font, setFont } = useFont();
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const appearanceFormSchema = z.object({
    theme: z.enum(["light", "dark"], {
      message: t("Appearance.Theme.Validation"),
    }),
    font: z.enum(fonts),
    locale: z.enum(LOCALES.map((l) => l.code)),
  });

  type AppearanceFormValues = z.infer<typeof appearanceFormSchema>;

  const defaultValues: Partial<AppearanceFormValues> = {
    theme: theme as "light" | "dark",
    font,
    locale: i18n.language as LocaleCode,
  };

  const form = useForm<AppearanceFormValues>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues,
  });

  function onSubmit(data: AppearanceFormValues) {
    if (data.font != font) {
      setFont(data.font);
    }
    if (data.theme != theme) {
      setTheme(data.theme);
    }
    if (data.locale != i18n.language) {
      i18n.changeLanguage(data.locale);
      setAppearance({ locale: data.locale });
    }

    toast.success(t("UI.UpdateSuccessful"));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="font"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("UI.Font")}</FormLabel>
              <FormDescription>
                {t("Appearance.Font.Description")}
              </FormDescription>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {fonts.map((font) => (
                      <SelectItem key={font} value={font}>
                        {font}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="theme"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("UI.Theme")}</FormLabel>
              <FormDescription>
                {t("Appearance.Theme.Description")}
              </FormDescription>
              <FormMessage />
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid max-w-md grid-cols-2 gap-8 pt-2"
              >
                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                    <FormControl>
                      <RadioGroupItem value="light" className="sr-only" />
                    </FormControl>
                    <div className="border-muted bg-popover hover:bg-accent hover:text-accent-foreground items-center rounded-md border-2 p-1">
                      <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                        <div className="space-y-2 rounded-md bg-white p-2 shadow-xs">
                          <div className="h-2 w-20 rounded-lg bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-xs">
                          <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-xs">
                          <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                        </div>
                      </div>
                    </div>
                    <span className="font-normal">{t("UI.Light")}</span>
                  </FormLabel>
                </FormItem>
                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                    <FormControl>
                      <RadioGroupItem value="dark" className="sr-only" />
                    </FormControl>
                    <div className="border-muted bg-popover hover:bg-accent hover:text-accent-foreground items-center rounded-md border-2 p-1">
                      <div className="space-y-2 rounded-sm bg-slate-950 p-2">
                        <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-xs">
                          <div className="h-2 w-20 rounded-lg bg-slate-400" />
                          <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-xs">
                          <div className="h-4 w-4 rounded-full bg-slate-400" />
                          <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-xs">
                          <div className="h-4 w-4 rounded-full bg-slate-400" />
                          <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                        </div>
                      </div>
                    </div>
                    <span className="font-normal">{t("UI.Dark")}</span>
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="locale"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("UI.Locale")}</FormLabel>
              <FormDescription>
                {t("Appearance.Locale.Description")}
              </FormDescription>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {LOCALES.map((item) => (
                      <SelectItem key={item.code} value={item.code}>
                        {item.flag} {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">{t("UI.Update")}</Button>
      </form>
    </Form>
  );
}
