type PaginationProps = {
    onNext: () => void;
}

export default function Pagination({  onNext }: PaginationProps) {
    return (
        <div className="flex items-center justify-center gap-4">
            <svg
                width="95"
                height="15"
                viewBox="0 0 95 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
                onClick={onNext}
            >
                <rect width="35" height="15" fill="#210140" />
                <rect x="50" width="15" height="15" fill="#6503A6" />
                <rect x="80" width="15" height="15" fill="#6503A6" />
            </svg>
        </div>
    );
}
