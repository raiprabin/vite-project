import { Popover, PopoverButton, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { crossSvg } from '../../assets/svgIcons';

export type MultiBoxTypes = {
  children?: React.ReactNode;
  icon?: React.ReactElement;
  iconStyles?: string;
  buttonTitle?: string;
  handleButtonTitleClick?: () => void;
  panelWidth?: number;
  closeIcon?: boolean;
  isDisabled?: boolean;
};
export default function MultiBox({
  children,
  buttonTitle,
  handleButtonTitleClick,
  iconStyles,
  icon,
  panelWidth,
  closeIcon = false,
  isDisabled = false,
}: MultiBoxTypes) {
  return (
    <div
      className={`multibox ${
        isDisabled ? 'disabled-filter pointer-events-none text-[#9ca3af]' : ''
      }`}
    >
      <Popover className="relative z-40">
        {({ open }) => (
          <>
            <PopoverButton
              onClick={handleButtonTitleClick}
              className={` gap-x-2 inline-flex items-center transition-colors ease-in-out delay-150 duration-300 px-4 py-2 text-sm rounded min-h-[40px] small leading-none ${
                isDisabled ? 'bg-[#EFEFEF4D]' : 'bg-danger-0'
              } text-black hover:bg-accent-300 border border-neutral-100 focus-visible:outline-none
                ${open ? 'active' : 'not-active'}
                `}
            >
              {icon && <i className={iconStyles}>{icon}</i>}
              {buttonTitle}
            </PopoverButton>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className={`absolute right-0 z-50 mt-3 `}
                style={{ width: panelWidth + 'px' }}
              >
                {({ close }) => (
                  <div className="shadow-lg">
                    <div
                      className="relative bg-danger-0 p-6"
                      onClick={(e) => {
                        const target = e.target as HTMLElement;
                        if (
                          target.getAttribute('aria-label') ===
                            'clear-filters' ||
                          target.getAttribute('aria-label') === 'save-filters'
                        )
                          close();
                      }}
                    >
                      {closeIcon && (
                        <Popover.Button className="absolute top-0 right-0 -translate-x-6 translate-y-[26px] cursor-pointer">
                          {crossSvg}
                        </Popover.Button>
                      )}
                      {children}
                    </div>
                  </div>
                )}
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
