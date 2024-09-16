import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Header from "@/components/Header.tsx";
import PrimaryButton from "@/components/buttons/Primary.tsx";
import Flash from "@/icons/Flash.tsx";
import Converter from "@/components/Converter.tsx";

function App() {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="grid grid-cols-2 h-full items-center px-20">
        <div className="flex flex-col space-y-12">
          <p className="font-playfair font-[900] text-secondary text-[100px] leading-[100px]">
            Converting
            <br />
            has never been <br />
            so easy.
          </p>
          <div>
            <a
              href="#"
              className="inline-block font-dm bg-secondary text-primary px-6 py-4 rounded-full text-2xl"
            >
              Discover More
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white rounded-2xl">
            <TabGroup className="text-center">
              <TabList className="px-6 grid grid-cols-2">
                <Tab className="text-tertiary data-[selected]:text-primary group">
                  Convert
                  <div className="hidden group-data-[selected]:block bg-primary w-full h-[3px]"></div>
                </Tab>
                <Tab className="text-tertiary data-[selected]:text-primary group">
                  Charts
                  <div className="hidden group-data-[selected]:block bg-primary w-full h-[3px]"></div>
                </Tab>
              </TabList>
              <TabPanels className="p-6">
                <TabPanel>
                  <Converter />
                </TabPanel>
                <TabPanel className="text-center flex flex-col justify-between">
                  <div>
                    <p className="text-lg font-semibold text-[#26211A]">
                      Track currencies
                    </p>
                    <p className="text-[#627574]">
                      Upgrade to premium to track currencies and even more
                    </p>
                  </div>
                  <PrimaryButton>
                    <div className="flex justify-center items-center gap-1">
                      <Flash />
                      Upgrade to premium
                    </div>
                  </PrimaryButton>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
