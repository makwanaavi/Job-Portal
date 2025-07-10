const CertificationCard = (cer: any) => {
  return (
    <div className="flex justify-between items-start">
      <div className="flex gap-3 items-center">
        <div className="p-2 bg-mine-shaft-800 rounded-lg">
          <img
            src={`/Icons/Google.png`}
            alt="Google"
            className="h-7 w-7 object-contain"
          />
        </div>
        <div>
          <div className="font-semibold text-mine-shaft-100">
            {cer.name}
          </div>
          <div className="text-sm text-mine-shaft-400">{cer.issuer}</div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-end">
            <div className="text-sm text-mine-shaft-200">{cer.issueDate}</div>
            <div className="text-sm text-mine-shaft-200"> {cer.certificateId}</div>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
