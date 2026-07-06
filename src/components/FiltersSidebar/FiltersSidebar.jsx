import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { categoryConfigs } from "../../config/categoryConfigs";
import { fieldDefinitions } from "../../config/fieldDefinitions";

import "./FiltersSidebar.css";

function FiltersSidebar({
  category,
  selectedFilters,
  setSelectedFilters
}) {

  const config =
    categoryConfigs[category];

  const [openSections, setOpenSections] =
    useState({});

  const toggleSection = (key) => {

    setOpenSections(prev => ({

      ...prev,

      [key]:
        !prev[key]

    }));

  };

  const toggleOption = (
    filterKey,
    option
  ) => {

    setSelectedFilters(prev => {

      const current =
        prev[filterKey] || [];

      const exists =
        current.includes(option);

      return {

        ...prev,

        [filterKey]:

          exists

            ?

            current.filter(
              item =>
                item !== option
            )

            :

            [
              ...current,
              option
            ]

      };

    });

  };

  if (!config)
    return null;

  return (

    <div className="filters">

      <div className="top-links">

        <div>Men</div>

        <div>Women</div>

        <div>Kids</div>

      </div>

      <button

        className="reset-btn"

        onClick={() =>
          setSelectedFilters({})
        }

      >

        Reset

      </button>

      {

        config.filters.map(
          filterKey => {

            const field =
              fieldDefinitions[
                filterKey
              ];

            if (!field)
              return null;

            return (

              <div

                className="filter-section"

                key={filterKey}

              >

                <div

                  className="filter-item"

                  onClick={() =>
                    toggleSection(
                      filterKey
                    )
                  }

                >

                  <span>

                    {field.label}

                  </span>

                  {

                    openSections[
                      filterKey
                    ]

                      ?

                      <ChevronUp
                        size={18}
                      />

                      :

                      <ChevronDown
                        size={18}
                      />

                  }

                </div>

                {

                  openSections[
                    filterKey
                  ]

                  &&

                  <div className="filter-options">

                    {

                      field.options?.map(
                        option => (

                          <label

                            className="filter-option"

                            key={option}

                          >

                            <input

                              type="checkbox"

                              checked={

                                selectedFilters[
                                  filterKey
                                ]

                                  ?.includes(
                                    option
                                  )

                              }

                              onChange={() =>
                                toggleOption(

                                  filterKey,

                                  option

                                )
                              }

                            />

                            {option}

                          </label>

                        )

                      )

                    }

                  </div>

                }

              </div>

            );

          }

        )

      }

    </div>

  );

}

export default FiltersSidebar;