import React, {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  useState,
  useEffect
} from 'react'

interface TextMaskProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: string
}

export const TextMaskCustom = forwardRef<HTMLInputElement, TextMaskProps>(
  ({ mask, value, onChange, ...props }, ref) => {
    const [inputValue, setInputValue] = useState(value || '')

    // Update internal state when the value prop changes
    useEffect(() => {
      if (value !== undefined) {
        setInputValue(value as string)
      }
    }, [value])

    const applyMask = (value: string, mask: string): string => {
      let result = ''
      let valueIndex = 0

      // Only keep digits for applying the mask
      const digitsOnly = value.replace(/\D/g, '')

      for (let i = 0; i < mask.length && valueIndex < digitsOnly.length; i++) {
        if (mask[i] === '9') {
          // Add digit character
          result += digitsOnly[valueIndex]
          valueIndex++
        } else {
          // Add mask character
          result += mask[i]
          // Don't increment valueIndex since we're adding a mask character
        }
      }

      return result
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      // Get raw input value
      const rawValue = e.target.value

      // Apply mask
      const maskedValue = applyMask(rawValue, mask)

      // Update internal state
      setInputValue(maskedValue)

      // Create a synthetic event to pass to the original onChange
      const syntheticEvent = {
        ...e,
        target: {
          ...e.target,
          name: props.name || '', // Ensure name is always provided
          id: props.id || '', // Ensure id is always provided
          value: maskedValue
        }
      }

      if (onChange) {
        onChange(syntheticEvent as ChangeEvent<HTMLInputElement>)
      }
    }

    return (
      <input {...props} ref={ref} value={inputValue} onChange={handleChange} />
    )
  }
)

TextMaskCustom.displayName = 'TextMaskCustom'
