import classNames from "classnames";
import { setCurrentAccount } from "~/store/auth/actions";
import { useSelector } from "react-redux";
import { PropTypes } from "prop-types";

const More = ({ close }) => {
  //const accounts = store?.getState().auth?.accounts;
  const accounts = useSelector((state) => state.auth.accounts);

  //const currentAccount = store?.getState().auth?.currentAccount;
  const currentAccount = useSelector((state) => state.auth.currentAccount);

  return (
    <div className="flex flex-col items-start py-4">
      {accounts.map((account, index) => {
        return (
          <button
            type="button"
            disabled={currentAccount.id === account.id}
            onClick={() => {
              setCurrentAccount(account);
              close();
            }}
            className={classNames("py-3 px-4 flex w-full transition-colors", {
              "hover:bg-[#eff3f41a]": account.id !== currentAccount.id,
            })}
            key={index}
          >
            <img
              src={account.avatar}
              className="w-10 h-10 rounded-full"
              alt="avatar"
            />
            <div className="flex flex-col justify-center items-start mx-3">
              <span className="font-bold ">{account.fullname}</span>
              <span className="text-[color:var(--color-baseSecondary)]">
                @{account.username}
              </span>
            </div>
          </button>
        );
      })}
      <div className="h-[0.5px] w-full bg-[#2f3336] my-2" />
      <div className="py-3 px-4 font-bold hover:bg-[#eff3f41a] w-full max-w-[220px]">
        <button>Varolan bir hesap ekle</button>
      </div>
      <div className="py-3 px-4 font-bold hover:bg-[#eff3f41a] w-full max-w-[220px]">
        <button>Çıkış yap</button>
      </div>
    </div>
  );
};

More.propTypes = {
  close: PropTypes.func,
};

export default More;
