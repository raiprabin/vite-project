import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";
import { FC, ReactNode } from "react";

export interface SimpleHUITab {
  id: number;
  title: string;
  panel: ReactNode;
}

interface TabsProps {
  tabs: SimpleHUITab[];
  selectedTab?: number;
  setSelectedTab?: (tabIndex: number) => void;
  isIndexVisible?: boolean;
  areTabsDisabled?: boolean;
  hasRadioButtons?: boolean;
  isDisabled?: boolean;
  type?: string;
}

const HUITabs: FC<TabsProps> = ({
  tabs,
  selectedTab,
  setSelectedTab,
  isIndexVisible,
  areTabsDisabled = false,
  hasRadioButtons = false,
  isDisabled = false,
  type,
}) => {
  
 
  const displayStyleMap = new Map();

 

  return (
    <TabGroup selectedIndex={selectedTab} onChange={setSelectedTab} manual>
      <TabList
        className={`tab-list list-none mx-0 mt-0 ${
          isDisabled ? 'pointer-events-none' : ''
        } ${
          hasRadioButtons
            ? '!gap-10 w-full'
            : 'border-b-2 border-neutral-100 gap-3'
        }  mb-6 flex items-center justify-start flex-wrap ${
          isIndexVisible ? 'pb-[6px] !gap-12 w-full px-6' : ''
        }
        ${areTabsDisabled && 'pointer-events-none'}
        `}
      >
        {tabs?.map((tab) => (
          <Tab
            key={tab?.id}
            aria-disabled={areTabsDisabled}
            className={`focus-within:outline-none ${
              hasRadioButtons ? '' : 'hover:bg-neutral-100'
            }  hover:rounded-[4px] transition-colors"`}
          >
            {({ selected }) => (
              <button
                className={`block py-2.5 relative text-base outline-0 shadow-none
                ${isIndexVisible ? '!px-0' : ''}
                ${hasRadioButtons ? '!px-0 font-normal' : 'px-4 font-semibold'}
                ${
                  selected
                    ? `active text-primary-700 after:content-[""] after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-[2px] ${
                        !isIndexVisible && !hasRadioButtons
                          ? 'after:bg-primary-700'
                          : ''
                      } focus:outline-none active:outline-none`
                    : `${
                        isIndexVisible
                          ? `${
                              tab?.id < selectedTab!
                                ? 'text-success-500'
                                : 'text-neutral-300'
                            } `
                          : 'text-neutral-500'
                      }`
                }
                ${isDisabled ? '!text-neutral-300' : ''}`}
                style={{ display: displayStyleMap.get(tab.id) }}
              >
                <div className="flex flex-row gap-2">

                  {hasRadioButtons ? (
                    <>
                      <input
                        type="radio"
                        checked={selected}
                        className="absolute opacity-0 cursor-pointer w-0 h-0"
                      />
                      <span
                        className={`
                                    absolute top-1/2 -translate-y-1/2 left-0 h-4 w-4 bg-[#fff] rounded-[50%]
                                    after:content-[""] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:h-auto after:aspect-square after:rounded-[50%] after:bg-danger-0
                                    ${
                                      selected
                                        ? 'bg-primary-700 after:block after:w-2'
                                        : 'bg-neutral-200 after:w-3'
                                    }
            `}
                      />
                    </>
                  ) : null}
                  <span className={`${hasRadioButtons ? 'pl-6' : ''}`}>
                    {tab?.title}
                  </span>
                </div>
              </button>
            )}
          </Tab>
        ))}
      </TabList>
      <TabPanels className="focus-visible:outline-none">
        {tabs?.map((tab) => (
          <TabPanel key={tab?.id} className="focus-visible:outline-none">
            {tab?.panel}
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};


export default HUITabs;
