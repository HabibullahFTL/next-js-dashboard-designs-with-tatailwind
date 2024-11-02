'use client';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';

interface ILanguage {
  flag: string;
  code: string;
  label: string;
}

interface IProps {
  className?: string;
  dropdownClassName?: string;
}

const LanguageDropdown = ({ className, dropdownClassName }: IProps) => {
  const languages = [
    {
      flag: '🇧🇩',
      code: 'bn',
      label: 'বাংলা',
    },
    {
      flag: '🇱🇷',
      code: 'en',
      label: 'English',
    },
  ];

  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<ILanguage>(
    languages?.[0]
  );

  const findLanguage = (languageCode: string) => {
    const language =
      languages?.find((item) => item?.code === languageCode) || languages?.[0];
    return language;
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className={cn('w-full justify-between px-2 gap-x-0', className)}
        >
          <span className="flex gap-x-1.5 items-center">
            <span className="shrink-0 text-lg">{selectedLanguage?.flag}</span>{' '}
            <span className="truncate"> {selectedLanguage?.label}</span>
          </span>
          <MdArrowDropDown className="shrink-0 text-2xl text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn('w-32 p-0', dropdownClassName)}>
        <Command>
          <CommandList>
            <CommandEmpty>No language found.</CommandEmpty>
            <CommandGroup>
              {languages.map((language) => (
                <CommandItem
                  key={language?.code}
                  value={language?.code}
                  onSelect={(languageCode) => {
                    setSelectedLanguage(findLanguage(languageCode));
                    setOpen(false);
                  }}
                >
                  <span className="text-lg">{language?.flag}</span>
                  {language?.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default LanguageDropdown;
