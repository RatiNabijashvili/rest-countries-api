import React, { useState, useEffect } from 'react'
import Styles from './Component.module.css'
import SearchIcon from './img/search.svg'
import DownArrow from './img/icon-arrow-down.svg'
import UpArrow from './img/icon-arrow-up.svg'
import { Context, Theme } from '../../Context'
import RegionList from './RegionList/RegionList'
import Countries from './Countries/Countries'
import { useNavigate } from 'react-router-dom'

const Component = () => {
  const { theme, setCountryData, countryData } = Context()
  const [arrow, setArrow] = useState<string>(DownArrow)
  const [filterText, setFilterText] = useState<string>('Filter by Region')
  const [data, setData] = useState<any>([])
  const [searchInput, setSearchInput] = useState<any>('')
  const navigate = useNavigate()

  const style = {
    border: theme === Theme.Light ? '1px solid hsl(0, 0%, 82%)' : 'none',
    backgroundColor:
      theme === Theme.Light ? 'hsl(0, 0%, 98%)' : 'hsl(207, 26%, 17%)',
    color: theme === Theme.Light ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)',
    iconColor:
      theme === Theme.Light
        ? 'invert(15%) sepia(11%) saturate(1547%) hue-rotate(168deg) brightness(93%) contrast(93%)'
        : 'invert(100%) sepia(69%) saturate(2%) hue-rotate(202deg) brightness(114%) contrast(101%)',
  }

  //this function will fetch data from rest countries api
  const fetchData = () => {
    return fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => setData(data))
  }
  useEffect(() => {
    fetchData()
  }, [])

  const handleSearch = (e: any) => {
    e.preventDefault()
    setSearchInput(e.target.value)
    if (searchInput.length > 0) {
      data.filter((country: any) => {
        return country.name.common.match(searchInput)
      })
    }
  }
  return (
    <div
      className={Styles['main-container']}
      style={{
        backgroundColor:
          theme === Theme.Light ? 'hsl(0, 0%, 98%)' : 'hsl(200, 15%, 8%)',
      }}
    >
      <div className={Styles['Country-filter-container']}>
        <div className={Styles['search-container']}>
          <img
            src={SearchIcon}
            className={Styles['search-icon']}
            alt='search-icon'
            style={{ filter: style.iconColor }}
          />
          <input
            placeholder='Search for a country...'
            className={Styles['search-input']}
            style={{
              backgroundColor: style.backgroundColor,
              border: style.border,
              color: style.color,
            }}
            onChange={handleSearch}
            value={searchInput}
          />
        </div>

        <div
          className={Styles['filter-container']}
          onClick={() => setArrow(arrow === DownArrow ? UpArrow : DownArrow)}
          style={{
            backgroundColor: style.backgroundColor,
            border: style.border,
          }}
        >
          <h2 className={Styles['filter-text']} style={{ color: style.color }}>
            {filterText}
          </h2>
          <img
            src={arrow}
            alt='arrow-icon'
            className={Styles['filter-arrow-icon']}
            style={{ filter: style.iconColor }}
          />
        </div>
      </div>
      <ul
        style={{
          backgroundColor: style.backgroundColor,
          display: arrow === DownArrow ? 'none' : 'flex',
        }}
        className={Styles['region-list-container']}
      >
        <RegionList
          region='Africa'
          style={style.color}
          click={() => (
            filterText === 'Africa'
              ? setFilterText('Filter by Region')
              : setFilterText('Africa'),
            setArrow(DownArrow)
          )}
        />
        <RegionList
          region='Americas'
          style={style.color}
          click={() => (
            filterText === 'Americas'
              ? setFilterText('Filter by Region')
              : setFilterText('Americas'),
            setArrow(DownArrow)
          )}
        />
        <RegionList
          region='Asia'
          style={style.color}
          click={() => (
            filterText === 'Asia'
              ? setFilterText('Filter by Region')
              : setFilterText('Asia'),
            setArrow(DownArrow)
          )}
        />
        <RegionList
          region='Europe'
          style={style.color}
          click={() => (
            filterText === 'Europe'
              ? setFilterText('Filter by Region')
              : setFilterText('Europe'),
            setArrow(DownArrow)
          )}
        />
        <RegionList
          region='Oceania'
          style={style.color}
          click={() => (
            filterText === 'Oceania'
              ? setFilterText('Filter by Region')
              : setFilterText('Oceania'),
            setArrow(DownArrow)
          )}
        />
      </ul>
      <div>
        <ul className={Styles['countries-container']}>
          {data
            .filter((value: any) => {
              if (searchInput === '') {
                return value
              } else if (
                value.name.common
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
              ) {
                return value
              }
            })
            .filter((value: any) => {
              if (filterText === 'Filter by Region') {
                return value
              } else if (
                value.region.toLowerCase() === filterText.toLowerCase()
              ) {
                return value
              }
            })
            .map((value: any) => {
              return (
                <li
                  key={value.name.common}
                  onClick={() => (
                    setCountryData(value),
                    navigate('/rest-countries-api/details')
                  )}
                >
                  <Countries
                    image={value.flags.png}
                    name={value.name.common}
                    population={value.population}
                    region={value.region}
                    capital={value.capital}
                  />
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}

export default Component
