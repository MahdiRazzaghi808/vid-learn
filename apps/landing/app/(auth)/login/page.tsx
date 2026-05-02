"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock, Mail, Loader2, Eye, EyeOff, LogIn, ArrowRight } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useMutation } from "@tanstack/react-query";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@repo/main/common/form/index"; 
import { Input } from "@repo/main/components/ui/input";
import { Button } from "@repo/main/components/ui/button";

const loginSchema = z.object({
    identifier: z.string().min(3, { message: "ایمیل یا شماره موبایل معتبر نیست" }),
    password: z.string().min(6, { message: "رمز عبور باید حداقل ۶ کاراکتر باشد" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            identifier: "",
            password: "",
        },
    });

    const loginMutation = useMutation({
        mutationFn: async (data: LoginFormValues) => {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            return data;
        },
        onSuccess: (data) => {
            console.log("Logged in successfully:", data);
        },
    });

    function onSubmit(data: LoginFormValues) {
        loginMutation.mutate(data);
    }

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/10 to-accent/30 px-4 py-12" dir="rtl">
            <Link 
                href="/" 
                className="absolute top-6 right-6 flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
                <ArrowRight className="w-4 h-4" />
                بازگشت به صفحه اصلی
            </Link>

            <div className="w-full max-w-md bg-background/80 backdrop-blur-xl border border-border/50 rounded-3xl shadow-xl p-8">
                <div className="flex flex-col items-center text-center mb-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary">
                        <LogIn className="w-6 h-6" />
                    </div>
                    <h1 className="text-2xl font-bold mb-2 tracking-tight">خوش آمدید</h1>
                    <p className="text-muted-foreground text-sm">
                        برای دسترسی به پنل کاربری خود وارد شوید.
                    </p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <FormField
                            control={form.control}
                            name="identifier"
                            rules={{ required: true }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-medium">ایمیل یا شماره موبایل</FormLabel>
                                    <FormControl>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                                                <Mail className="w-4 h-4" />
                                            </div>
                                            <Input
                                                type="text"
                                                placeholder="name@example.com"
                                                className="pl-10 text-left bg-muted/30 focus:bg-background transition-all duration-200"
                                                dir="ltr"
                                                {...field}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            rules={{ required: true }}
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex items-center justify-between">
                                        <FormLabel className="text-sm font-medium">رمز عبور</FormLabel>
                                        <Link href="/forgot-password" className="text-xs text-primary/80 hover:text-primary transition-colors">
                                            رمز عبور را فراموش کردید؟
                                        </Link>
                                    </div>
                                    <FormControl>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                                                <Lock className="w-4 h-4" />
                                            </div>
                                            <Input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="••••••••"
                                                className="pl-10 pr-10 text-left bg-muted/30 focus:bg-background transition-all duration-200"
                                                dir="ltr"
                                                {...field}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground transition-colors"
                                                tabIndex={-1}
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="w-4 h-4" />
                                                ) : (
                                                    <Eye className="w-4 h-4" />
                                                )}
                                            </button>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button 
                            type="submit" 
                            className="w-full"
                            size="lg"
                            disabled={loginMutation.isPending}
                        >
                            {loginMutation.isPending ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                "ورود به حساب"
                            )}
                        </Button>
                    </form>
                </Form>

                <div className="mt-8 text-center text-sm text-muted-foreground">
                    حساب کاربری ندارید؟{" "}
                    <Link href="/register" className="text-primary font-semibold hover:underline underline-offset-4">
                        ثبت‌نام کنید
                    </Link>
                </div>
            </div>
        </div>
    );
}
