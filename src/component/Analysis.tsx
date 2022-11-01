interface AnalysisProps {
  valid: number;
  valid_percent: number;
  mismatched: number;
  mismatched_percent: number;
  missing: number;
  missing_percent: number;
  unique: number;
  most_common: string;
  most_common_percent: number;
}

function Analysis({
  valid,
  valid_percent,
  mismatched,
  mismatched_percent,
  missing,
  missing_percent,
  unique,
  most_common,
  most_common_percent,
}: AnalysisProps) {
  return (
    <div className="analysis">
      <div className="analysis-item">
        <div className="item-front">
          <div className="item-name">
            Valid <div className="item-square green-bg"></div>
          </div>
          <div className="item-count">{valid}</div>
        </div>
        <div className="item-last grey">{valid_percent}%</div>
      </div>
      <div className="analysis-item">
        <div className="item-front">
          <div className="item-name">
            Mismatched <div className="item-square orange-bg"></div>
          </div>
          <div className="item-count">{mismatched}</div>
        </div>
        <div className="item-last grey">{mismatched_percent}%</div>
      </div>
      <div className="analysis-item">
        <div className="item-front">
          <div className="item-name">
            Missing <div className="item-square red-bg"></div>
          </div>
          <div className="item-count">{missing}</div>
        </div>
        <div className="item-last grey">{missing_percent}%</div>
      </div>
      <div className="analysis-item mt-10">
        <div className="item-front">
          <div className="item-name">Unique</div>
          <div className="item-count">{unique}</div>
        </div>
        <div className="item-last grey"></div>
      </div>
      <div className="analysis-item">
        <div className="item-front">
          <div className="item-name">Most Common</div>
          <div className="item-count">{most_common}</div>
        </div>
        <div className="item-last grey">{most_common_percent}%</div>
      </div>
    </div>
  );
}

export default Analysis;
