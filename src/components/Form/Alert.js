import {
  CheckCircleIcon,
  ExclamationIcon,
  XCircleIcon,
  InformationCircleIcon
} from '@heroicons/react/solid'

const Alert = ({textAlert, iconInformation}) => {
  function renderIconInformation(icon) {
    return icon === 'warning' ? (
      <ExclamationIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
    ) : icon === 'danger' ? (
      <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
    ) : icon === 'success' ? (
      <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
    ) : icon === 'info' ? (
      <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
    ) : null
  }

  return (
    <div className="rounded-md bg-yellow-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">{renderIconInformation(iconInformation)}</div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">Attention needed</h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>{textAlert}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alert
