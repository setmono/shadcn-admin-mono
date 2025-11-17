import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";

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
import { Input } from "@mono/ui/core/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@mono/ui/core/select";
import { Textarea } from "@mono/ui/core/textarea";

import { dataToast } from "@/components/data-toast";

export function ProfileForm() {
  const { t } = useTranslation();

  const profileFormSchema = z.object({
    username: z
      .string(t("Profile.Username.Validation.Empty"))
      .min(2, t("Profile.Username.Validation.Min"))
      .max(30, t("Profile.Username.Validation.Max")),
    email: z.email({
      error: (iss) =>
        iss.input === undefined
          ? t("Profile.Email.Validation.Empty")
          : undefined,
    }),
    bio: z.string().max(160, t("Profile.Bio.Validation.Max")).optional(),
  });

  type ProfileFormValues = z.infer<typeof profileFormSchema>;

  const defaultValues: Partial<ProfileFormValues> = {
    username: "",
    bio: "",
  };

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => dataToast(data))}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("UI.Username")}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t("Profile.Username.Placeholder")}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                {t("Profile.Username.Description")}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("UI.Email")}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={t("Profile.Email.Placeholder")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                {t("Profile.Email.Description")}
                <Link to="/" className="underline">
                  {t("Profile.Email.GoEmailSetting")}
                </Link>
                {"。"}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t("Profile.Bio.Placeholder")}
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>{t("Profile.Bio.Description")}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">{t("UI.Update")}</Button>
      </form>
    </Form>
  );
}
