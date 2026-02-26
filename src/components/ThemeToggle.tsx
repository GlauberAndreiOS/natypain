import { useState } from 'react'
import type { ReactNode } from 'react'
import type { ThemeMode } from '../constants/theme'

type ThemeToggleProps = {
  mode: ThemeMode
  onChange: (mode: ThemeMode) => void
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8Z" />
    </svg>
  )
}

function SystemIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  )
}

const modeOptions: { mode: ThemeMode; label: string; icon: ReactNode }[] = [
  { mode: 'light', label: 'Light', icon: <SunIcon /> },
  { mode: 'dark', label: 'Dark', icon: <MoonIcon /> },
  { mode: 'system', label: 'System', icon: <SystemIcon /> },
]

export function ThemeToggle({ mode, onChange }: ThemeToggleProps) {
  const [isOpen, setIsOpen] = useState(false)
  const current = modeOptions.find((option) => option.mode === mode) ?? modeOptions[2]

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-2">
      {isOpen && (
        <div className="rounded-xl bg-[var(--color-surface)]/95 p-2 shadow-lg ring-1 ring-[var(--color-border)] backdrop-blur">
          {modeOptions.map((option) => (
            <button
              key={option.mode}
              type="button"
              onClick={() => {
                onChange(option.mode)
                setIsOpen(false)
              }}
              className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${
                mode === option.mode
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'text-[var(--color-text)] hover:bg-[var(--color-bg-alt)]'
              }`}
            >
              {option.icon}
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      )}

      <button
        type="button"
        aria-label="Selecionar tema"
        onClick={() => setIsOpen((value) => !value)}
        className="flex items-center gap-2 rounded-full bg-[var(--color-secondary)] px-4 py-3 text-white shadow-lg transition hover:opacity-90"
      >
        {current.icon}
        <span className="text-sm font-semibold">{current.label}</span>
      </button>
    </div>
  )
}
