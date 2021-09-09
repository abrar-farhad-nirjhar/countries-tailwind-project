import React from 'react';

interface Props {
  language: any;
}

export default function LanguagesItem({ language }: Props) {
  return (
    <tr>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='flex items-center'>
          <div className='ml-4'>
            <div className='text-sm font-medium text-gray-900'>
              {language.name}
            </div>
          </div>
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-900'>{language.code}</div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
        {language.native}
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
          {language.rtl ? 'TRUE' : 'FALSE'}
        </span>
      </td>
    </tr>
  );
}
