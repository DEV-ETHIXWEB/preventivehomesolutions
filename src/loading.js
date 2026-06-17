import { useEffect, useState } from 'react'

// Tiny global loading-state store shared between the router (which turns the
// loader ON when navigation starts) and App (which turns it OFF once the new
// page's images have actually finished loading). Starts true so the very first
// paint shows the loading screen until the initial route is ready.

let current = true
const listeners = new Set()

export function setLoading(value) {
  if (current === value) return
  current = value
  listeners.forEach((fn) => fn(value))
}

export function getLoading() {
  return current
}

export function useLoading() {
  const [value, setValue] = useState(current)
  useEffect(() => {
    listeners.add(setValue)
    setValue(current)
    return () => listeners.delete(setValue)
  }, [])
  return value
}
