import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import skill_data from '@/data/skill-data.json'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import OnbordHader from "@/modules/onboarding/components/ui/OnbordHader"
import { X } from "lucide-react";
import { useState } from "react"
import NextStepButton from "@/modules/onboarding/components/ui/NextStepButton";

const FreelancerSkillSelection = () => {
    const [isOptionVisible, setIsOptionVisible] = useState<boolean>(false);
    const [selectedSkill, setSelectedSkill] = useState<string[]>([]);
    const [skillName, setSkillName] = useState<string>("");

    // handle skill change throw typing
    const handleSkillChange = (value: string) => {
        value.length ? setIsOptionVisible(true) : setIsOptionVisible(false);
        setSkillName(value);
    }

    // handle add skill throw add button
    const handleAddSkill = () => {
        if (selectedSkill.includes(skillName)) return setSkillName("");
        if (!skill_data.includes(skillName)) return setSkillName("");
        setSelectedSkill((prev: string[]) => [...prev, skillName]);
        setSkillName("");
    }

    // remove skill from badge
    const handleRemoveSkill = (event: React.MouseEvent<HTMLDivElement>) => {
        const skill_for_delete = (event.target as HTMLElement).getAttribute("data-skill-name");
        setSelectedSkill((prev: string[]) => {
            return prev.filter((skill: string) => skill != skill_for_delete)
        })
    }

    // handle add skill thow command slect
    const handleCommandSelect = (event: React.MouseEvent<HTMLDivElement>) => {
        const skill_select = (event.target as HTMLElement).getAttribute("data-skill");
        setSkillName(skill_select || "");
        setIsOptionVisible(false);
    }

    return (
        <div className="space-y-4">
            <OnbordHader
                title={'Discover Your Skills'}
                description={'Select the skills that define your expertise and showcase your strengths. Tailor your profile to stand out and connect with opportunities that match your unique talents.'}
            />
            <div className="mt-10">
                <div className="flex flex-wrap gap-2" onClick={handleRemoveSkill}>
                    {selectedSkill.length != 0 && (
                        selectedSkill.map((skill: string, index: number) => (
                            <Badge key={index} className="w-min flex text-base gap-x-2">
                                {skill}
                                <X cursor={'pointer'} size={12} data-skill-name={skill} />
                            </Badge>
                        ))
                    )}
                </div>

                <div className="mt-2 flex gap-x-2 h-60">
                    <Command className={`border h-10`}>
                        <CommandInput value={skillName} onValueChange={handleSkillChange} placeholder="Type a skills or search..." />
                        <div className="w-full h-full relative">
                            <CommandList className={`${!isOptionVisible && 'hidden'} rounded-b-md top-0 absolute w-full h-auto shadow`}>
                                <CommandEmpty>No results found.</CommandEmpty>
                                <CommandGroup onClick={handleCommandSelect} heading="Skills">
                                    {skill_data.length != 0 && (
                                        skill_data.map((skill: string, index: number) => (
                                            <CommandItem className={'capitalize'} data-skill={skill} key={index}>
                                                {skill}
                                            </CommandItem>
                                        ))
                                    )}
                                </CommandGroup>
                            </CommandList>
                        </div>
                    </Command>
                    <Button size={'lg'} onClick={handleAddSkill}>
                        Add Skill
                    </Button>
                </div>
            </div>
            <NextStepButton handleSubmit={() => {}}/>
        </div>
    )
}

export default FreelancerSkillSelection