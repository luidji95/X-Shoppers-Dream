type CompanyFilterProps = {
  selectedCompany: string;
  companies: string[];
  updateFilters: (name: string, value: string) => void;
};

const CompanyFilter = ({
  selectedCompany,
  companies,
  updateFilters,
}: CompanyFilterProps) => {
  return (
    <div className="filter-company">
      <p className="filter-title">Company</p>
      <select
        value={selectedCompany}
        onChange={(e) => updateFilters("company", e.target.value)}
      >
        {companies.map((c) => (
          <option key={c} value={c}>
            {c.charAt(0).toUpperCase() + c.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CompanyFilter;
