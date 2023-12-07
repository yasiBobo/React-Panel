import "./topBox.scss"
import { topDealUsers } from "../../data.ts"
import UserImg from "./dealUser.jpg"

const TopBox = () => {
  return (
    <div>
      <div className="topBox">
        <h1>Top Deals</h1>

        <div className="list">
          {topDealUsers.map((user)=> (
            <div className="listItem" key={user.id}>
              <div className="user">
                <img src={UserImg} alt="user" />
                <div className="userTexts">
                  <span className="username">{user.username}</span>
                  <div className="email">{user.email}</div>
                </div>
              </div>
              <span className="amount">${user.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopBox
