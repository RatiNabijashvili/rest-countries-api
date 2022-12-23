import React from 'react'
import { Context, Theme } from '../../Context'
import Nav from '../../Nav/Nav'
import { useNavigate } from 'react-router-dom'
import Component from './CountryDetailsComponent/Component'
import Styles from './CountryDetails.module.css'

const CountryDetails = () => {
  const { countryData, theme } = Context()
  const navigate = useNavigate()
  const style = {
    border: theme === Theme.Light ? '1px solid hsl(0, 0%, 82%)' : 'none',
    backgroundColor:
      theme === Theme.Light ? 'hsl(0, 0%, 98%)' : 'hsl(207, 26%, 17%)',
    color: theme === Theme.Light ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)',
  }

  return (
    <div
      style={{
        backgroundColor:
          theme === Theme.Light ? 'hsl(0, 0%, 98%)' : 'hsl(200, 15%, 8%)',
      }}
    >
      <Nav />
      <div className={Styles['main-container']}>
        <div>
          <button
            onClick={() => navigate('/rest-countries-api')}
            className={Styles['back-button']}
            style={{
              backgroundColor: style.backgroundColor,
              color: style.color,
              border: style.border,
            }}
          >
            Back
          </button>
        </div>
        <div className={Styles['country-container']}>
          <div>
            <img
              src={countryData.flags.png}
              alt='country-flag'
              className={Styles['country-flag']}
            />
          </div>
          <div>
            <h2
              className={Styles['country-name']}
              style={{ color: style.color }}
            >
              {countryData.name.common}
            </h2>
            <div className={Styles['details-container']}>
              <div className={Styles['details-container-left-side']}>
                <Component
                  name='Native Name:'
                  value={countryData.altSpellings[1]}
                />
                <Component name='Population:' value={countryData.population} />
                <Component name='Region:' value={countryData.region} />
                <Component name='Sub Region:' value={countryData.subregion} />
                <Component name='Capital:' value={countryData.capital} />
              </div>
              <div>
                <Component name='Top Level Domain:' value={countryData.tld} />
                <Component
                  name='Currencies:'
                  value={
                    countryData.Currencies
                      ? countryData.currencies[
                          Object.keys(countryData.currencies)[0]
                        ].name
                      : 'no currencies'
                  }
                />
                <Component
                  name='Languages'
                  value={
                    countryData.languages
                      ? Object.values(countryData.languages).join(', ')
                      : 'no languages'
                  }
                />
              </div>
            </div>
            <div className={Styles['border-countries-container']}>
              <h2
                className={Styles['border-countries-text']}
                style={{ color: style.color }}
              >
                Border Countries:
              </h2>
              <div className={Styles['border-countries-div']}>
                {countryData.borders &&
                  countryData.borders.map((data: any) => {
                    return (
                      <li
                        key={data}
                        className={Styles['border-countries']}
                        style={{
                          backgroundColor: style.backgroundColor,
                          color: style.color,
                          border: style.border,
                        }}
                      >
                        {data}
                      </li>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryDetails
