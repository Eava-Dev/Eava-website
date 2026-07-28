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
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "2px",
  color: "#ffffff",
  padding: "0.75rem 1rem",
  fontFamily: "var(--font-inter)",
  fontWeight: 300,
  fontSize: "0.95rem",
};

const choiceLabelStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "0.6rem",
  fontFamily: "var(--font-inter)",
  fontWeight: 300,
  fontSize: "0.9rem",
  color: "#E5E5E5",
  cursor: "pointer",
};

const choiceInputStyle: CSSProperties = {
  accentColor: "#22D3EE",
  width: "16px",
  height: "16px",
  cursor: "pointer",
  flexShrink: 0,
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
  children,
  required,
}: {
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <label style={labelStyle}>
      {children}
      {required && <span style={{ color: "#22D3EE" }}> *</span>}
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
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>
      <input
        className="of-input"
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={inputStyle}
      />
    </div>
  );
}

export function TextAreaField({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  rows = 3,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}) {
  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>
      <textarea
        className="of-textarea"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        style={{ ...inputStyle, resize: "vertical", lineHeight: 1.5 }}
      />
    </div>
  );
}

export function RadioGroupField({
  label,
  name,
  value,
  onChange,
  options,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  required?: boolean;
}) {
  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        {options.map((opt) => (
          <label key={opt.value} style={choiceLabelStyle}>
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              style={choiceInputStyle}
            />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  );
}

export function CheckboxGroupField({
  label,
  values,
  onToggle,
  options,
}: {
  label: string;
  values: string[];
  onToggle: (value: string) => void;
  options: string[];
}) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        {options.map((opt) => (
          <label key={opt} style={choiceLabelStyle}>
            <input
              type="checkbox"
              checked={values.includes(opt)}
              onChange={() => onToggle(opt)}
              style={choiceInputStyle}
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}
