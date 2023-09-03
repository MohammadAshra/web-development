import "./index.css"

const Welcome = () => {
    return(
      <div className="bg-container">
        <div className="navbar">
          <div className="nav-left-items">
            <p>Home</p>
            <p>About</p>
            <p>Scedules</p>
            <p>Membership</p>
            <p>Pricing</p>
          </div>
          <div className="nav-right-items">
            <p>Offers</p>
            <button className="courses-button">Courses</button>
          </div>
        </div>
        <div className="troopical-destinations">
          <div className="troopical-left-items">
            <svg className="troopical-svg" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
              <path d="M0 64C0 55.5954 1.65541 47.2731 4.87171 39.5083C8.08801 31.7434 12.8022 24.6881 18.7452 18.7452C24.6881 12.8022 31.7434 8.08801 39.5083 4.87171C47.2731 1.65541 55.5954 -3.67377e-07 64 0V19.2C58.1168 19.2 52.2912 20.3588 46.8558 22.6102C41.4204 24.8616 36.4817 28.1616 32.3216 32.3216C28.1616 36.4817 24.8616 41.4204 22.6102 46.8558C20.3588 52.2912 19.2 58.1168 19.2 64H0Z" fill="#BE554B"/>
            </svg>
            <p className="troopie-discover">Discover the beuty of the tropics</p>
            <p className="troopie-destinations">Tropical Destinations For Students</p>
            <p>Lorem ipsum dolor sit amet consectetur.
                 Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae 
            </p>
            <button className="button-troope">SIGN UP</button>
          </div>
          <div className="troopical-right-items">
        <img src="https://s3-alpha-sig.figma.com/img/6d04/8963/fa69a6e58502b7cd5bc9e595335ae6c8?Expires=1694390400&Signature=Bl6t3xs-lssYDiba9ogFUZSF6pXmJ83wNLbxZH02eO7RiyvDFasBXzPeZzhbp7njobW2e6kxO2ELPfiCzfzM29t2CtXMVtHBV6MUWDvGE7EZyxO-qgk2~KlX5OucDD24bg3vWOTEP0DTguQgMdKX4DJ2PvjJ0~FDL7Vx-dcPnkC3nCtvpS80QvFUte8ITezkF5agX6fqFgN4w6UaUZ1HbAtQU8WjcG1pvD6ngCwoYNYKyYNjNK8CArqz-BDVgYFeqcGD25WAv~njn3t0isDY26iI-N7H-vQmLT-GJlPTR0tsr0q7MfVv6aT4UB88QISAs3FnGE8-YUKt5i2MyBI3xQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="troopie-image" />
          </div>
        </div>
        <div className="second-card-container">
            <div className="jenny-and-troopie-container">
                <div className="jenny-wison-card-container">
                    <div>
                      <img src="https://s3-alpha-sig.figma.com/img/0085/f746/1d145f53b603c083a4276a40cca2e5b4?Expires=1694390400&Signature=ACH0FlmB4GRCCVk~~GG0i0vzO2w2glKkt-SfB72kyemdj-Hgf2YefpxOH~vgh8VutOWPAAMmmIvXDRm9Wyhx~dsi6o~30by9n7K0ESYShuNfqWjaC6eDDuO-QHP9kOHnuU-VyEhcAR9allgNT2kPwZc2CgNJbquE0Z2LOOhfIE~pH1ngRdIADfEfqqYJRMDIhP5xTpSrWctZVpv4g403rsqAw6Ypljso31NZwH~zb~QtljdASqN0SpclZQ1AQ3qQxfzyHNGUBTJMn1VeUuzprMQe~WZUiRuSxO4MetT7ma4I5yfBj2ve~RkxmDU79T6eQK9S0ODf54VA6LA5FKhZxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="card-item-jenny" />
                    </div>
                    <div>
                    <p className="jenny-name">Jenny Wilson</p>
                    <p className="jenny-para">Loren ipsum dolor sit amet, consectetur adipising...</p>
                    </div>
                </div>
                <div className="jenny-wison-card-container">
                  <div>
                    <img src="https://s3-alpha-sig.figma.com/img/8829/84e5/13f1a16feb72a1cd0c2adc353bcb0bab?Expires=1694390400&Signature=j2tiUrAhCzAwzvVsSA~-fubvn0n18XMwP9KNU1QJEnmwRVSrSzHV1p3HLxNfAg5F04iSIIDGLAalU61tRP2eDGNdojylwh9n81fTY06HaRzBzjZh269uE5qAbJocEvdbWyBv8XWv09OVOyq4P9HgtKZMAftX24xP7deEVpkIlRqkDr1cgfg0qutzmSBAWN5XnNLn8Q95rgVCbh4EYdyz42jH2BIjJZzgCcYQGMYNAVEgk9q71oerrdjdwqTX2VLJvyh4tvIcnOyQ1LyOmFANT6Bjfci7qtN7zKBTQIonSvfyjH3QDAPYMEvDPBrijgFEly5oq315r7LvYTtqsX6uNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="card-item-jenny" />
                  </div>
                  <div>
                    <p className="jenny-name">Jenny Wilson</p>
                    <p className="jenny-para">Loren ipsum dolor sit amet, consectetur adipising...</p>
                  </div>
                </div>
                <div className="jenny-wison-card-container">
                  <div>
                    <img src="https://s3-alpha-sig.figma.com/img/f746/c72f/c409607d63c3fde87ace043e53591dc3?Expires=1694390400&Signature=FdwT23WoAmoz8xqV9vMgxD3XhoGb5d0-DQtIqArJ3GJNaMYn0sgfUQb3Z766oyZ1IBzLp~ss9n~nt7IpEnuKjEzTXMdHSWKZ5GRXDZvuXniOHQ1y13mfd6hu0keT9eftvjcFOHyrQUW6PUZ675xC1plgk8gjH0NJkaj2Fchp11NS8Yg0ofdLzmbWzGRPM6J71zWUeAmVhOFQcWxjZB7zCiXhzlQ~TnjAugvblaY69UbfePOQB56-ZDab5KLzv8T0Z27~lRIgx6mq9sEGDpRlg1x-LmhX-sQ~Z2ZHzPDg22TUiwM2~yKi9fdxBgoRVEx530jVxVr5hSNsGEpks9VgBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="card-item-jenny" />
                  </div>
                  <div>
                    <p className="jenny-name">Jenny Wilson</p>
                    <p className="jenny-para">Loren ipsum dolor sit amet, consectetur adipising...</p>
                  </div>
                </div>
            </div>
            <div className="right-card-item-of-jemmy-and-troopie">
                <h1>Tropical Adventure <span>for students</span></h1>
                <p>Student Tropical vacation. Relax and Recharge</p>
                <li>Lorem ipud dotot ait amet</li>
                <li>Lorem ipud dotot ait amet</li>
                <li>Lorem ipud dotot ait amet</li>
                <li>Lorem ipud dotot ait amet</li>
                <li>Lorem ipud dotot ait amet</li>
                <button className="button-explore-menu">Explore More</button>
            </div>
        </div>
        <h1 className="our-destinations">Our Destinations</h1>
        <div className="university-container">
            <div className="university-cards-container">
                <img src="https://snz04pap002files.storage.live.com/y4mPHrN-ICQtmwP8B0XKAbyi7ubJvscqx36CpWcheCvABjmg9BfjYMLyfXZQaP0nt2IVwSMgudwr0Ru0GZBecFF9IdjFoESMgnuTwTXT7mVM-xbbxMbu4BrLHT6BKnhVRfJ_en_ZzpoZBj8X3jsUTS1MzCUvB571-gGPdmYW1wx1LM61DYsvMrRW9QO8i_e4lnrmtgMhzb6RjrfSdl9aTG15g?encodeFailures=1&width=834&height=758" className="university-images" />
                <p className="image-name">Harvard University</p>
                <p className="image-details">Cambridge, Massachusetts, UK</p>
            </div>
            <div className="university-cards-container">
                <img src="https://snz04pap002files.storage.live.com/y4m1k1_ASGMr-cC4813G-9tXBIswG5npOEbRZJtKWtN4sc1N3P9RC6J535SJkMSOmS1YZx_A0Qk_1O62RbPY83M1hLwRjcv8rVqSUOBfQ97J3FiVM7vU8_FmLwCrI3akWTR5cnriWTxlJHF_zFlKqPMs3HNJ43uPQxjxCy4Or5tbHc5y0GH0m_66FobL6bf2d1K2z6-DEeKooq652oCqQWO2w?encodeFailures=1&width=834&height=758" className="university-images" />
                <p className="image-name">Oxford University</p>
                <p className="image-details">Cambridge, Massachusetts, UK</p>
            </div>
            <div className="university-cards-container">
                <img src="https://snz04pap002files.storage.live.com/y4mBvcbnTSBMgvwjya3ZQM3TDqAT2Shbr0j5BG2sZPp2WdSNZJox441GYTCslWgIhlr1buzhnIzH1Xq3diyONF6FeSix1cFOM3b-mwj-nAQif2k-w0emt2wTx_jtZnggFryedzIALJdqml2jVtUSge-WyjYUiqzgWbogOs1AZ7KTZ1XvUcA7EuDzH8xxkm5KKZk5JDEAtk8HgMwNgSA5ajzvw?encodeFailures=1&width=834&height=758" className="university-images" />
                <p className="image-name">Stanford University</p>
                <p className="image-details">Cambridge, Massachusetts, UK</p>
            </div>
            <div className="university-cards-container">
                <img src="https://snz04pap002files.storage.live.com/y4mlKUIBmSNX2-KFrwyk9Z54YgRBvFFmGK4xJuuCarhhNo_WOMKoX08znyZvspEaAVSkzwgyNvgLwB8alfi6HBLR03b6lBiBRp92HdjnKjnx8VE--nf6CzvHZZi_hu7g1KOjbaewOmfDGVJYxt-IPNbA4_20H6gEoj1br-N8OIcuciBJrJegATpIDoz5G0leBAYXRweh0Is7sOGVf8kLWB-0A?encodeFailures=1&width=586&height=758" className="university-images" />
                <p className="image-name">Nanyang University</p>
                <p className="image-details">Cambridge, Massachusetts, UK</p>
            </div>
        </div>
        <div className="arrows">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 45 45" fill="none">
            <path d="M45 21.0826H5.42659L14.3463 12.1628L12.3418 10.1583L0 22.4999L12.3418 34.8418L14.3463 32.8372L5.42659 23.9175H45V21.0826Z" fill="#262626"/>
          </svg>
          <p className="two-number">2 <span>/140</span></p>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 45 45" fill="none">
            <path d="M0 21.0826H39.5734L30.6537 12.1628L32.6582 10.1583L45 22.4999L32.6582 34.8418L30.6537 32.8372L39.5734 23.9175H0V21.0826Z" fill="#F27A44"/>
          </svg>
        </div>
        <div className="troopical-destinations">
          <div className="troopical-left-items">
            <svg className="troopical-svg" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
              <path d="M0 64C0 55.5954 1.65541 47.2731 4.87171 39.5083C8.08801 31.7434 12.8022 24.6881 18.7452 18.7452C24.6881 12.8022 31.7434 8.08801 39.5083 4.87171C47.2731 1.65541 55.5954 -3.67377e-07 64 0V19.2C58.1168 19.2 52.2912 20.3588 46.8558 22.6102C41.4204 24.8616 36.4817 28.1616 32.3216 32.3216C28.1616 36.4817 24.8616 41.4204 22.6102 46.8558C20.3588 52.2912 19.2 58.1168 19.2 64H0Z" fill="#BE554B"/>
            </svg>
            <p className="troopie-discover">Get 20% off for student</p>
            <p className="troopie-destinations">Student discounts available.
            </p>
            <p>Get ready for some fun in the sun!</p>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <button className="button-troope">Explore More</button>
          </div>
          <div className="troopical-right-items">
            <img src="https://snz04pap002files.storage.live.com/y4mrmRjPvdyep9xrYvZkqGkBvWG-G1b7AFXv636S969ATrCAf7qkRmqG8hEo4tDxx59rYbOWbGK4wz50ecYFxtI9qUe8vuSFA6Ub_V2tgx1f_ZR_Nxb1toSiHNRxELvi71f3OeUosmul9FjeT0kpjjmFN_RgsPXGq6cw_Ng9545Xti00SUG_2TrpEHY_D4DOZeEH3PeV-VTOmkAc1DyvHKiwA?encodeFailures=1&width=542&height=758" className="troopie-image" />
          </div>
        </div>
        <div className="form-container">
            <div>
                <img src="https://snz04pap002files.storage.live.com/y4mAKKpXaXszCTzFDYX4w6-EmKiSeP1mqTK05CkWhK7vcDf2sSh9AsMoz6ENuu_XCTC0Ve7L6c59Q7J_gchwbnjyMXKEr9pD3SF5nQdpN39lHMxyOnbllvY9jlvS-vW6g2H9DXE4Z0u2BIpxOiScy7S2Su0X70MGV4yWdYmO6UFVk4GxHVcBHzDkzVrU2pY3EslAhMrwGwlPL4jdPS5izcmRA?encodeFailures=1&width=526&height=758" className="form-image" />
            </div>
            <div className="form-container-right">
              <div>
                <h1>Book now</h1>
                <p>Lorem ipsum dolor sit amet, consectetur</p>  
              </div>
              <form>
                <label for="city">CITY</label>
                <input type="text" id="city" placeholder="Placeholder" />
                <div className="arrival-departure">
                  <label for="arrival">Arrival</label>
                  <input type="text" id="arrival" />
                  <label for="departure">Departure</label>
                  <input type="text" id="departure" />
                </div>
                <button className="book-now-button">BOOK NOW</button>
              </form>
            </div>
        </div>
            <h1 className="testonials-heading">Testonials</h1>
        <div>
            <div className="testonials-container-three-avatars">
                <div className="image-avatars-card"> 
                    <img src="https://s3-alpha-sig.figma.com/img/3097/7dd9/f430803399b897bdba68cb08cb59c38d?Expires=1694390400&Signature=co29rgXfczs4-VzwRWzdbWuwhWLyljVwEXPkoiJuWL~30UGx2oXQj-wilnWU-51VE4kfmcdyLZ2CUrdUsDicKtXu27IUEue9-zcB0hcqOdI5CwOO0F8XznX5uadDv4G3nt~oxj787HNVBH4GbYZSpUXRbwttmS6UCe2GzzQnQJ0U-WLRDRNFCwlg-~p1r9ZXF-N3c1Oie9mkXBR7HtCXMwP94-vEU8~sr2XCxIa~x0TjH0Pwc22Uec448ShU5LjRARVQShj5HzGROFLi5AkdRgidk5cwi1ljc1W--TDgJEMbWWh3m-4vNHCgusCcOkNRO98e8VQNMEKQjmQmqW2rKg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="images-testonials" />
                    <p>Corey Korsgaard</p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className="image-avatars-card">
                    <img src="https://s3-alpha-sig.figma.com/img/8716/bf34/49122901736105327390be173f5f9a81?Expires=1694390400&Signature=Rd4l5zwYMuGw7FQ--e13-awTHE8fibyftEdaXSOnXBuT4-TZaQYEQ6NWDIJeAaW9Ii203wyotvfspEunEMf13xhe3955j3y5q-OvjAxyDdsvRPxDe5haU4303kLtCRP01fsrfb6yjHx-Y1o7owc2jEmS77ORKTNWaj8HBqdsA9L6N6gctzM5P~GZEp9rgbclinTfwt83sxTrH0xj~yjPp2MwKab8ZO0eZx~uVwvF4d5xx8L6lfc-Fgt2UCR3vM07W~11QAymsnfGGF3Uo-4oufUi0NTWj3wHizNX~0M974LDwM0eg2TeErqmoZlQYL-9LqiSeE8O4LGFdL-VIWRtuA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="images-testonials" />
                    <p>Jakob Aminoff</p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className="image-avatars-card">
                    <img src="https://s3-alpha-sig.figma.com/img/dd1e/11cb/cc2758378eabcbbd108487ddc43dbdeb?Expires=1694390400&Signature=DJ4krKhESSVklqgmMereW-QBlIDVc8uWzL1Lg4V6sfilf5gccAK33ljK-fdReFw2s7TuuwV2OAryPFar1DS~jHCnrmRNsdS8Ndq-fuDte1DoYcBGEYGr2KmRChciviB0BFWEG~FVCHNvX2cLHHPxlyRu320C-rTq30LkptTE0fTZfHGSqiRTn0fXd87Cwmnt9LKxvlkTQRAYu~aj3IqqtiXXJgpgzanBV7a5zUgvGB6zWPOdHwnI1M5Rjyfd7Gq6C4-vMs~oOKXTlLXxlwBikStoyK9BE5e1C18eTUl2I3jwYCG3vdSfINpX1uQMysVa6gr655lEqw~xhkLB44D0oQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="images-testonials" />
                    <p>Carla Press</p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>
        </div>

        <div className="students-special">
            <h1>Students Special: Discounted rates on tropical gateways!</h1>
            <p>Let's emboy you beutiful ideas together, simpliy the way you visualize your next big things.</p>
        <div className="nav-last">
            <p>Privacy policy</p>
            <p>Terms of Use</p>
            <p>Sales and Refunds</p>
            <p>Legal</p>
            <p>About</p>
            <p>Schedules</p>
            <p>Pricing</p>
            <p>Memberships</p>
            <p>Joins</p>
        </div>
        </div>
      </div>
    )
}

export default Welcome