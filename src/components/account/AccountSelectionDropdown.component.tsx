interface IAccountSelectionDropdownProps {}

function AccountSelectionDropdown(_ : IAccountSelectionDropdownProps) {
  return (
    <div className="max-w-sm mx-auto">
      <select
        className="py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200"
      >
        <option value="allOptions" className="bg-neutral-800">All Accounts</option>
        <option value="US" className="bg-neutral-800">Account 1</option>
        <option value="CA" className="bg-neutral-800">Account 2</option>
        <option value="FR" className="bg-neutral-800">Account 3</option>
        <option value="DE" className="bg-neutral-800">Account 4</option>
      </select>
    </div>
  );
}

export default AccountSelectionDropdown;
