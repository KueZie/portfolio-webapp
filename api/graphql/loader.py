from typing import Optional, List, AnyStr
import os

from gql import gql

_schema_search_dirs: List[str] = []


def configure_search_directories(directories: List[str]) -> None:
    """ Appends directories where `load` will search for schemas. """
    for dirname in directories:
        if not os.path.exists(dirname):
            raise FileNotFoundError(f'Directory: \'dirname\' does not exist.')
        _schema_search_dirs.append(dirname)


def _load_schema_internal(file_path) -> AnyStr:
    with open(file_path, 'r') as file_descriptor:
        return file_descriptor.read()


def load(schema_name: str) -> Optional[str]:
    """ Load a given schema and return its string representation. Will return None if file does not exists.
        Raises FileExistsError is duplicate instances of schema_name are found in search directories. """
    schema: Optional[str] = None

    for search_dir in _schema_search_dirs:
        file_path = os.path.join(search_dir, schema_name)
        if os.path.isfile(file_path):
            if schema is not None:
                raise FileExistsError(f'When searching for schema found duplicate instances of {schema_name}.')
            schema = _load_schema_internal(file_path)

    if schema is not None:
        return gql(schema)
    return None
