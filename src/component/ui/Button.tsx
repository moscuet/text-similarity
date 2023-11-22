import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import * as React from 'react'

const buttonVariants = cva(
    'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-indigo-300 disabled:pointer-events-none dark:focus:ring-offset-slate-800',
    {
      variants: {
        variant: {
          default:
            'bg-indigo-500 text-white hover:bg-indigo-600 dark:bg-indigo-300 dark:text-slate-800 dark:hover:bg-indigo-400',
          destructive: 
            'bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600',
          outline:
            'bg-indigo-500 text-white hover:bg-indigo-600 dark:bg-indigo-300 dark:text-slate-800 dark:hover:bg-indigo-400 border border-indigo-500 dark:border-indigo-300',
          subtle:
            'bg-sky-400 text-white hover:bg-sky-500 dark:bg-sky-300 dark:text-slate-800 dark:hover:bg-sky-400',
          ghost:
            'bg-transparent hover:bg-indigo-100 dark:hover:bg-indigo-700 text-indigo-500 dark:text-indigo-300',
          link: 
            'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-indigo-500 dark:text-indigo-300 hover:bg-transparent dark:hover:bg-transparent',
        },
        size: {
          default: 'h-10 py-2 px-4',
          sm: 'h-9 px-2 rounded-md',
          lg: 'h-11 px-8 rounded-md',
        },
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
      },
    }
  );
  

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}>
        {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }