import { FormControl, FormField } from '@/components/ui/form'
import Icon from '@/components/ui/icon'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import React from 'react'

const LocationInput = ({form}) => {
  return (
    <Popover >
      <PopoverTrigger >
        <div className="flex gap-2 items-center px-4 py-2 rounded bg-background lg:min-w-[360px] h-full">
          <Icon 
          icon='bed'
          size='24'
          className='text-muted-foreground shrink-0 ' />
          <FormField  
             control={form.control}
             name="city"
             render={({field}) =>(
              <FormControl>
                <Input  className="w-full h-full px-2 text-sm border-0 focus-visible:ring-transparent focus-visible:ring-offset-transparent placeholder:font-normal placeholder:text-foreground focus:placeholder-muted-foreground"
                  placeholder="Where are you going?"
                  {...field}
                  
                  />
                  

              </FormControl>
             )}
          />

          
        </div>
        
      </PopoverTrigger>
      <PopoverContent>

      </PopoverContent>
    </Popover>
  )
}

export default LocationInput