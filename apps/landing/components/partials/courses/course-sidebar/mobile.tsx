import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@repo/main/components/ui/accordion'
import React from 'react'
import { CourseSidebar } from './base'
import { ClearFiltersButton } from './clear-filters'

function MobileFilter() {
    return (
        <Accordion type="single" collapsible className="w-full bg-accent px-6 rounded-lg">
            <AccordionItem value="mobile-filter" className="border-none">
                <AccordionTrigger className="hover:no-underline text-md font-semibold relative">
                    <span>فیلترها</span>
                    <div className='absolute left-5'>
                        <ClearFiltersButton />
                    </div>
                </AccordionTrigger>

                <AccordionContent className="pt-4">
                    <CourseSidebar />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default MobileFilter
