import React, { useState } from 'react';

const RequirementManagementForm = () => {
  const [requirementOrigin, setRequirementOrigin] = useState('');
  const [targetArea, setTargetArea] = useState('');
  const [priority, setPriority] = useState('');
  const [businessJustification, setBusinessJustification] = useState('');
  const [issueType, setIssueType] = useState('');
  const [source, setSource] = useState('');
  const [businessUnit, setBusinessUnit] = useState('');
  const [businessProblem, setBusinessProblem] = useState('');
  const [businessBenefit, setBusinessBenefit] = useState('');
  const [resources, setResources] = useState('');
  const [duration, setDuration] = useState('');
  const [effort, setEffort] = useState('');
  const [smeRequired, setSmeRequired] = useState('');
  const [year, setYear] = useState('');
  const [forWhom, setForWhom] = useState('');
  const [whatChanging, setWhatChanging] = useState('');
  const [howChanging, setHowChanging] = useState('');
  const [testingRequired, setTestingRequired] = useState('');
  const [trainingRequired, setTrainingRequired] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="requirementOrigin">Requirement Origin:</label>
        <input
          type="text"
          id="requirementOrigin"
          value={requirementOrigin}
          onChange={(e) => setRequirementOrigin(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="targetArea">Target Area:</label>
        <input
          type="text"
          id="targetArea"
          value={targetArea}
          onChange={(e) => setTargetArea(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="priority">Priority:</label>
        <input
          type="text"
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="businessJustification">Business Justification:</label>
        <textarea
          id="businessJustification"
          value={businessJustification}
          onChange={(e) => setBusinessJustification(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="issueType">Issue Type:</label>
        <input
          type="text"
          id="issueType"
          value={issueType}
          onChange={(e) => setIssueType(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="source">Source:</label>
        <input
          type="text"
          id="source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="businessUnit">Business Unit:</label>
        <input
          type="text"
          id="businessUnit"
          value={businessUnit}
          onChange={(e) => setBusinessUnit(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="businessProblem">Business Problem:</label>
        <textarea
          id="businessProblem"
          value={businessProblem}
          onChange={(e) => setBusinessProblem(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="businessBenefit">Business Benefit:</label>
        <textarea
          id="businessBenefit"
          value={businessBenefit}
          onChange={(e) => setBusinessBenefit(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="resources">Resources:</label>
        <input
          type="text"
          id="resources"
          value={resources}
          onChange={(e) => setResources(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="duration">Duration:</label>
        <input
          type="text"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="effort">Effort:</label>
        <input
          type="text"
          id="effort"
          value={effort}
          onChange={(e) => setEffort(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="smeRequired">SME Required:</label>
        <input
          type="text"
          id="smeRequired"
          value={smeRequired}
          onChange={(e) => setSmeRequired(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input
          type="text"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="forWhom">For Whom:</label>
        <input
          type="text"
          id="forWhom"
          value={forWhom}
          onChange={(e) => setForWhom(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="whatChanging">What is Changing:</label>
        <textarea
          id="whatChanging"
          value={whatChanging}
          onChange={(e) => setWhatChanging(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="howChanging">How is it Changing:</label>
        <textarea
          id="howChanging"
          value={howChanging}
          onChange={(e) => setHowChanging(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="testingRequired">Testing Required:</label>
        <input
          type="text"
          id="testingRequired"
          value={testingRequired}
          onChange={(e) => setTestingRequired(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="trainingRequired">Training Required:</label>
        <input
          type="text"
          id="trainingRequired"
          value={trainingRequired}
          onChange={(e) => setTrainingRequired(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RequirementManagementForm;