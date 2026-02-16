"use client";

import { useState } from "react";
import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default function DeleteAccountPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/delete-account/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(
          data.message ||
            "Your account deletion request has been received. Your account has been deactivated and all associated data will be permanently deleted within 7 days.",
        );
        setEmail("");
      } else {
        setStatus("error");
        setMessage(
          data.detail ||
            data.message ||
            "Something went wrong. Please try again.",
        );
      }
    } catch {
      setStatus("error");
      setMessage(
        "Unable to connect to the server. Please check your internet connection and try again.",
      );
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-[#E8E8E8] px-5 py-4 md:px-[80px] md:py-[28px]">
        <a href="/">
          <Logo className="w-[80px] h-[16.699px] md:w-[187.489px] md:h-[30px]" />
        </a>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-5 py-12 md:py-20">
        <div className="w-full max-w-[520px]">
          <h1 className="text-[24px] md:text-[36px] font-semibold text-foreground text-center mb-2">
            Delete Your Account
          </h1>
          <p className="text-[14px] md:text-[16px] text-[#505050] text-center mb-8 leading-[22px] md:leading-[26px]">
            Request permanent deletion of your Chequemate account and associated
            data.
          </p>

          {/* Deletion Form */}
          {status !== "success" ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-[14px] font-medium text-foreground mb-[6px]"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your registered email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-[48px] text-[16px] md:text-[14px]"
                />
              </div>

              {status === "error" && (
                <p className="text-[14px] text-destructive">{message}</p>
              )}

              <Button
                type="submit"
                variant="destructive"
                disabled={status === "loading" || !email}
                className="h-[48px] text-[16px] font-semibold rounded-[4px] w-full"
              >
                {status === "loading"
                  ? "Submitting..."
                  : "Request Account Deletion"}
              </Button>
            </form>
          ) : (
            <div className="bg-brand-green-light border border-brand-green rounded-[8px] p-5 text-center">
              <p className="text-[14px] md:text-[16px] text-foreground font-medium">
                {message}
              </p>
            </div>
          )}

          {/* Data Deletion Info */}
          <div className="mt-10 border border-[#E8E8E8] rounded-[8px] p-5 md:p-6">
            <h2 className="text-[16px] md:text-[18px] font-semibold text-foreground mb-4">
              What happens when you delete your account
            </h2>

            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-[14px] font-semibold text-foreground mb-1">
                  Data that will be permanently deleted:
                </h3>
                <ul className="text-[13px] md:text-[14px] text-[#505050] leading-[22px] list-disc pl-5 flex flex-col gap-1">
                  <li>Your profile information and account details</li>
                  <li>Virtual account and wallet data</li>
                  <li>KYC verification records</li>
                  <li>Ajo group memberships and contribution history</li>
                  <li>Saved preferences and settings</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[14px] font-semibold text-foreground mb-1">
                  Data that may be retained for compliance:
                </h3>
                <ul className="text-[13px] md:text-[14px] text-[#505050] leading-[22px] list-disc pl-5 flex flex-col gap-1">
                  <li>
                    Transaction records (required by financial regulations for
                    up to 5 years)
                  </li>
                  <li>
                    Records needed for fraud prevention or legal obligations
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[14px] font-semibold text-foreground mb-1">
                  Timeframe:
                </h3>
                <p className="text-[13px] md:text-[14px] text-[#505050] leading-[22px]">
                  Your account will be deactivated immediately. All eligible
                  data will be permanently deleted within{" "}
                  <strong>7 days</strong> of your request.
                </p>
              </div>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-[14px] text-brand-green font-medium hover:underline"
            >
              Back to Home
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E8E8E8] py-4 text-center">
        <p className="text-[12px] md:text-[14px] text-[#505050]">
          Copyright 2024 &copy; The Owlet
        </p>
      </footer>
    </div>
  );
}
