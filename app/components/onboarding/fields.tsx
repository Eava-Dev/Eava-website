"use client";

import type { ChangeEvent, CSSProperties, ReactNode } from "react";

const labelStyle: CSSProperties = {
  display: "block",
  fontFamily: "var(--font-inter)",
  fontWeight: 500,
  fontSize: "0.85rem",
  color: "#E5E5E5",
  marginBottom: "0.5rem",
};

const inputStyle: CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.4)",
  borderRadius: "2px",
  color: "#ffffff",
  padding: "0.75rem 1rem",
  fontFamily: "var(--font-inter)",
  fontWeight: 300,
  fontSize: "0.95rem",
};

export function FormSection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        border: "1px solid rgba(34,211,238,0.2)",
        borderRadius: "4px",
        background: "rgba(255,255,255,0.02)",
        padding: "2.5rem 2rem",
        marginBottom: "2rem",
      }}
    >
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "1.4rem",
          color: "#ffffff",
          marginBottom: description ? "0.5rem" : "1.75rem",
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
            fontSize: "0.85rem",
            color: "#888888",
            marginBottom: "1.75rem",
          }}
        >
          {description}
        </p>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {children}
      </div>
    </div>
  );
}

export function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} style={labelStyle}>
      {children}
      {required && (
        <span style={{ color: "#22D3EE" }} aria-hidden="true">
          {" "}
          *
        </span>
      )}
    </label>
  );
}

export function TextField({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  type?: "text" | "email" | "tel";
}) {
  return (
    <div>
      <FieldLabel htmlFor={name} required={required}>
        {label}
      </FieldLabel>
      <input
        className="of-input"
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        aria-required={required}
        style={inputStyle}
      />
    </div>
  );
}

export function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  required,
  placeholder = "Select one",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <FieldLabel htmlFor={name} required={required}>
        {label}
      </FieldLabel>
      <select
        className="of-input"
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        aria-required={required}
        style={{ ...inputStyle, cursor: "pointer" }}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
